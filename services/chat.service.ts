import PouchDB from 'pouchdb-react-native';
import { Message } from '../types';

class Chat {
  private user: string = 'Anonymous';
  private room: string = 'general';
  private currentRoom?: any;
  private remoteDBurl: String = 'http://gathor.org:5984';
  private remoteDB?: any;
  // private remoteMessageDB?: any;

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
        continus: true
      }
    );

    this.remoteDB.on('change', this.handleChange(onSync));
    this.remoteDB.on('error', this.handleError(onError));

    return this.currentRoom
      .allDocs({
        include_docs: true,
        descending: true
      })
      .then((messages: any) => {
        return messages.rows.map((row: any) => row.doc);
      });
  }

  sendMessage(messageContent: string) {
    let message: Message = {
      content: messageContent,
      author: this.getUser(),
      created_at: new Date()
    };

    return this.currentRoom.post(message).then(({ id }: any) => {
      return {
        ...message,
        _id: id
      };
    });
  }

  handleChange(callback: Function) {
    return (change: any) => {
      console.log('save');
      callback(change);
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
