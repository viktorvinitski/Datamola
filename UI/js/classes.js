"use strict";
let count = 1;
const idGenerator = () => (count++).toString();
const date = `${new Date().toLocaleDateString()} ${new Date()
  .toLocaleTimeString()
  .slice(0, -3)}`;
const messages = [
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: date,
    author: "Cristiano Ronaldo",
    isPersonal: true,
    to: "Viktor Vinitski",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: date,
    author: "Viktor Vinitski",
    isPersonal: true,
    to: "Leo Messi",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: date,
    author: "Bruno Fernandes",
    isPersonal: true,
    to: "Viktor Vinitski",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: date,
    author: "Viktor Vinitski",
    isPersonal: true,
    to: "Harry Kane",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: date,
    author: "Viktor Vinitski",
    isPersonal: true,
    to: "Dele Alli",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: date,
    author: "Viktor Vinitski",
    isPersonal: true,
    to: "Wayne Rooney",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: date,
    author: "Viktor Vinitski",
    isPersonal: true,
    to: "Harry Maguire",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: date,
    author: "Viktor Vinitski",
    isPersonal: true,
    to: "David De Gea",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: date,
    author: "Viktor Vinitski",
    isPersonal: true,
    to: "Paul Pogba",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: date,
    author: "Viktor Vinitski",
    isPersonal: true,
    to: "Donny van de Beek",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: date,
    author: "Viktor Vinitski",
    isPersonal: true,
    to: "Ronaldinho",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: date,
    author: "Viktor Vinitski",
    isPersonal: true,
    to: "Nemanja Matic",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: date,
    author: "Viktor Vinitski",
    isPersonal: true,
    to: "Luke Shaw",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: date,
    author: "Viktor Vinitski",
    isPersonal: true,
    to: "Anthony Martial",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: date,
    author: "Viktor Vinitski",
    isPersonal: true,
    to: "Dan James",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: date,
    author: "Viktor Vinitski",
    isPersonal: true,
    to: "Mason Greenwood",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: date,
    author: "Viktor Vinitski",
    isPersonal: true,
    to: "Edinson Cavani",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: date,
    author: "Viktor Vinitski",
    isPersonal: true,
    to: "Odion Ighalo",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: date,
    author: "Viktor Vinitskiy",
    isPersonal: true,
    to: "Zlatan Ibragimovich",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: date,
    author: "Vik Vinitski",
    isPersonal: true,
    to: "Marcus Rashford",
  },
];

class Message {
  constructor({ id, text, createdAt, to, isPersonal, author }) {
    (this._id = id),
      (this.text = text),
      (this._createdAt = createdAt),
      (this._author = author),
      (this.isPersonal = isPersonal),
      (this.to = to);
  }
  get id() {
    return this._id;
  }
  get author() {
    return this._author;
  }
  get createdAt() {
    return this._createdAt;
  }
}

function isNonEmptyString(str) {
  return str && typeof str === "string";
}
class MessageModel {
  constructor(msgs = []) {
    this._messages = msgs;
  }
  setUser(user) {
    this._user = user;
  }
  setCompanion(companion) {
    this._companion = companion;
  }
  getPage(skip = 0, top = 10, { author, dateFrom, dateTo, text } = {}) {
    let result = this._messages.filter(
      (item) => item.author === this._user || item.author === this._companion
    );
    if (author) {
      result = result.filter((item) =>
        item.author.toLowerCase().includes(author.toLowerCase())
      );
    }
    if (dateFrom) {
      result = result.filter((item) => item.createdAt >= dateFrom);
    }
    if (dateTo) {
      result = result.filter((item) => item.createdAt <= dateTo);
    }
    if (text) {
      result = result.filter((item) =>
        item.text.toLowerCase().includes(text.toLowerCase())
      );
    }
    return result
      .sort((a, b) => a.createdAt - b.createdAt)
      .slice(skip, skip + top);
  }
  get(id) {
    return this._messages.find((item) => item.id === id);
  }
  add(msg) {
    if (MessageModel.validate(msg)) {
      msg.id = idGenerator();
      msg.createdAt = date;
      msg.author = this._user;
      this._messages.push(new Message(msg));
      return true;
    }
    return false;
  }
  edit(id, msg) {
    let index = this._messages.findIndex((item) => item.id === id);
    if (index === -1 || !MessageModel.validateFields(msg)) {
      return false;
    }
    if (this._messages[index].author === this._user) {
      Object.assign(this._messages[index], msg);
      return true;
    }
    return false;
  }
  remove(id) {
    let index = this._messages.findIndex((item) => item.id === id);
    if (index === -1) {
      return false;
    }
    if (this._messages[index].author === this._user) {
      this._messages.splice(index, 1);
      return true;
    }
    return false;
  }
  static validate({ text }) {
    return isNonEmptyString(text) && text.length <= 200;
  }
  static validateFields({ text }) {
    return !text || text.length <= 200;
  }
  addAll(msgs = []) {
    let notValidMessages = [];

    msgs.forEach((item) => {
      let added = this.add(item);
      if (!added) {
        notValidMessages.push(item);
      }
    });

    return notValidMessages;
  }
  clear() {
    return (this._messages = []);
  }
}

//=============================================================================

class UserList {
  constructor(users, activeUsers) {
    this.users = users;
    this.activeUsers = activeUsers;
  }
}

class HeaderView {
  constructor(containerId) {
    this.containerId = containerId;
  }
  display({ currentUser }) {
    if (!this.container) {
      this.container = document.getElementById(this.containerId);
    }
    this.container.innerHTML = `
        <div class="user_photo"></div>
        <div id="user_name" class="user_name">${currentUser}</div>  
      `;
  }
}

class MessagesView {
  constructor(containerId) {
    this.containerId = containerId;
  }
  display(msg) {
    if (!this.container) {
      this.container = document.getElementById(this.containerId);
    }
    this.container.innerHTML = msg
      .map((msg) => this.getMessageHTML(msg))
      .join("");
  }
  getMessageHTML({ text, author, createdAt, to }) {
    if (author === "Viktor Vinitski") {
      return `
          <div class="messages_area-outgoing">
          <div class="messages_area-outgoing_item">
              <div class="outgoing_item-message">
                  <div class="outgoing_item-message_adressee">You</div>
                  <div class="outgoing_item-message_text">
                      ${text}
                      <div class="message_buttons">
                          <button class="message_edit-button">
                              <span class="iconify" data-inline="false"
                                  data-icon="ant-design:edit-filled"
                                  style="color: #d89ff2; font-size: 16px;"></span>
                          </button>
                          <button class="message_delete-button">
                              <span class="iconify" data-inline="false"
                                  data-icon="ant-design:delete-filled"
                                  style="color: #d89ff2; font-size: 16px;"></span>
                          </button>
                      </div>
                      <div class="outgoing_item-message_date">${createdAt}</div>
                  </div>
              </div>
              <div class="outgoing_item-photo"></div>
          </div>
      </div>
          `;
    }

    return `
      <div class="messages_area-incoming">
      <div class="messages_area-incoming_item">
          <div class="incoming_item-photo"></div>
          <div class="incoming_item-message">
              <div class="incoming_item-message_adressee">${author}</div>
              <div class="incoming_item-message_text">
                  ${text}
                  <div class="incoming_item-message_date">${createdAt}</div>
              </div>
          </div>
      </div>
     </div>
      `;
  }
}

class ActiveUsersView {
  constructor(containerId) {
    this.containerId = containerId;
  }
  display() {
    if (!this.container) {
      this.container = document.getElementById(this.containerId);
    }
    this.container.innerHTML = userList.activeUsers
      .map((user) => this.getUsersHTML(user))
      .join("");
  }
  getUsersHTML(name) {
    return `
      <div class="user_online">
      <div class="user_online-photo"></div>
      <div class="user_online-name">${name}</div>
        </div>
        `;
  }
}

class PersonalUsersView {
  constructor(containerId) {
    this.containerId = containerId;
  }
  display() {
    if (!this.container) {
      this.container = document.getElementById(this.containerId);
    }
    this.container.innerHTML = userList.users
      .map((user) => this.getUsersHTML(user))
      .join("");
  }
  getUsersHTML(name) {
    return `
      <div class="user_online">
      <div class="user_online-photo"></div>
      <div class="user_online-name">${name}</div>
        </div>
        `;
  }
}

const messageList = new MessageModel(messages.map((item) => new Message(item)));
const userList = new UserList(
  [
    "Cristiano Ronaldo",
    "Leo Messi",
    "Bruno Fernandes",
    "Harry Kane",
    "Dele Alli",
    "Wayne Rooney",
    "Harry Maguire",
    "David De Gea",
    "Paul Pogba",
    "Donny van de Beek",
    "Ronaldinho",
  ],
  ["Bruno Fernandes", "Harry Kane","Ronaldinho","Paul Pogba"]
);

const headerView = new HeaderView("header-view");
const messagesView = new MessagesView("messages_area");
const activeUsers = new ActiveUsersView("users");
const allUsers = new PersonalUsersView("users");

function setCurrentUser(user) {
  messageList.setUser(user);
  headerView.display({ currentUser: user });
}

function showMessages(skip, top, { author, dateFrom, dateTo, text } = {}) {
  messageList.setCompanion("Cristiano Ronaldo");
  messageList.setUser("Viktor Vinitski");
  let msgs = messageList.getPage(skip, top, { author, dateFrom, dateTo, text });
  messagesView.display(msgs);
}

function showAllUsers() {
  allUsers.display();
}

function showActiveUsers() {
  activeUsers.display();
}

function addMessage(msg) {
  messageList.setUser("Viktor Vinitski");
  messageList.add(msg);
  showMessages(0, 20);
}

function editMessage(id, msg) {
  messageList.setUser("Viktor Vinitski");
  messageList.edit(id, msg);
  showMessages(0, 20);
}

function removeMessage(id) {
  messageList.setUser("Viktor Vinitski");
  messageList.remove(id);
  showMessages(0, 20);
}

showActiveUsers(); // Показать активных пользователей
showAllUsers(); // Показать всех пользователей
setCurrentUser("Viktor Vinitski"); // Отобразить текущего пользователя
addMessage({ text: "How are you?" }); // Добавить сообщение
editMessage("13", { text: "Hello!" }); // Изменить сообщение по ID
removeMessage("14"); // Удалить сообщение по ID
showMessages(0, 20); // Показать список всех сообщений
