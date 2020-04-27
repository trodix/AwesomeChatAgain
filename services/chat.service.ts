import PouchDB from 'pouchdb-react-native';
import { Message } from '../types';

class Chat {
  private user: string = 'Anonymous';
  private room: string = 'general';
  private currentRoom?: any;
  private remoteDBurl: String = 'http://gathor.org:5984';
  private remoteDB?: any;

  public constructor() {}

  join(user: string, room: string, onSync: Function, onError: Function) {
    this.setUser(user);
    this.setRoom(room);

    if (!/^_/.test(this.getRoom())) {
      onError('This name is forbidden');
    }

    this.currentRoom = new PouchDB(this.getRoom());
    this.remoteDB = this.currentRoom.sync(
      `${this.remoteDBurl}/${this.getRoom()}`,
      {
        live: true,
        retry: true,
        continuous: true
      }
    );

    this.remoteDB.on('change', this.handleChange(onSync));
    this.remoteDB.on('error', this.handleError(onError));

    return this.getListMessages();
  }

  sendMessage(messageContent: string) {
    let message: Message = {
      content: messageContent,
      author: this.getUser(),
      created_at: new Date()
    };

    return this.currentRoom.post(message).then(({ _id }: any) => {
      return {
        ...message,
        key: _id
      };
    });
  }

  getListMessages() {
    return this.currentRoom
      .allDocs({
        include_docs: true,
        descending: true
      })
      .then((messages: any) => {
        return messages.rows
          .map((row: any) => row.doc)
          .filter((i: Message) => !!i.content)
          .sort((a: Message, b: Message) =>
            new Date(b.created_at) < new Date(a.created_at) ? 1 : -1
          );
      });
  }

  handleChange(callback: Function) {
    return (change: any) => {
      this.getListMessages()
        .then((messageList: []) => {
          callback(messageList);
        })
        .catch(console.error);
      console.log('save');
    };
  }

  handleError(callback: Function) {
    return (error: any) => {
      console.log('error');
      callback(error);
    };
  }

  setUser(user: string) {
    this.user = user;

    return this.user;
  }

  getUser() {
    return this.user;
  }

  setRoom(room: string) {
    if (room.length > 0) {
      this.room = room;
    }

    return this.room;
  }

  getRoom() {
    return this.room;
  }
}

export const chatService = new Chat();
