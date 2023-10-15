export default class MessagesService {
    constructor() {
      this.apiUrl = import.meta.env.VITE_BACKEND_URL;

      if (!MessagesService.instance) {
        MessagesService.instance = this;
      }
      return MessagesService.instance;
    }
  
    async getMessages() {
      const response = await fetch(`${this.apiUrl}/messages`);
      const messages = await response.json();
      return messages;
    }
  
    async sendMessage(message) {
      const response = await fetch(`${this.apiUrl}/messages`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(message),
      });
      const newMessage = await response.json();
      return newMessage;
    }
  }