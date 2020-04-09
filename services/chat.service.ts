import PouchDB from 'pouchdb-react-native';
import { Message } from '../types';

class Chat {
  private user: string = 'Anonymous';
  private room: string = 'général';
  private db?: any;

  public constructor() {}

  join(user: string, room: string) {
    this.setUser(user);
    this.setRoom(room);

    this.db = new PouchDB(this.room);

    return this.db
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
    return this.db.post(message).then(({ id }: any) => {
      return {
        ...message,
        key: id
      };
    });
  }

  setUser(user: string) {
    this.user = user;

    return this.user;
  }

  getUser() {
    return this.user;
  }

  setRoom(room: string) {
    this.room = room;

    return this.room;
  }

  getRoom() {
    return this.room;
  }
}

export const chatService = new Chat();
