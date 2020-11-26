"use strict";
const MESSAGES_LOCALSTORAGE_KEY = 'messages'
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
    author: "Cristiano Ronaldo",
    isPersonal: true,
    to: "Viktor Vinitski",
  },
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
    to: "Cristiano Ronaldo",
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
const registerUsersList = []
const nameInPhoto = (name) => {
  return name
    .split("")
    .filter((item) => item === item.toUpperCase())
    .join("");
};
const isNonEmptyString = (str) => {
  return str && typeof str === "string";
};


class Message {
  constructor({ id, text, createdAt, to, isPersonal, author }) {
    (this._id = id),
      (this.text = text),
      (this._createdAt = createdAt),
      (this._author = author),
      (this.isPersonal = isPersonal),
      (this.to = to);
  }
  toJSON(){
    return {
      id: this.id,
      text: this.text,
      createdAt: this.createdAt,
      author: this.author,
      isPersonal: this.isPersonal,
      to: this.to
    }
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
class MessageModel {
  constructor() {
    this._user = "Viktor Vinitski";
    this.restore();
  }
  restore() {
    const rawMessages = JSON.parse(
      localStorage.getItem(MESSAGES_LOCALSTORAGE_KEY)
    );
    this._messages = rawMessages.map((item) => new Message(item));
  }
  save() {
    localStorage.setItem(
      MESSAGES_LOCALSTORAGE_KEY,
      JSON.stringify(this._messages)
    );
  }
  getUser() {
    return this._user;
  }
  setUser(user) {
    this._user = user;
  }
  setCompanion(companion) {
    this._companion = companion;
  }
  getPage(skip = 0, top = 10, { author, dateFrom, dateTo, text } = {}) {
    let result = this._messages.filter(
      (item) =>
        item.author === this.getUser() || item.author === this._companion
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
      .slice(skip, skip + top)
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
      this.save();
      return true;
    }
    return false;
  }
  edit(id, msg) {
    let index = this._messages.findIndex((item) => +item.id === id);
    if (index === -1 || !MessageModel.validateFields(msg)) {
      return false;
    }
    let newMsg = prompt("Message", msg);
    if (newMsg === null) {
      return msg;
    }
    if (this._messages[index].author === this.getUser()) {
      this._messages[index].text = newMsg;
      this.save();
      return true;
    }
    return false;
  }
  remove(id) {
    let index = this._messages.findIndex((item) => +item.id === id);
    if (index === -1) {
      return false;
    }
    if (this._messages[index].author === this.getUser()) {
      this._messages.splice(index, 1);
      this.save();
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
    this._messages = [];
    this.save();
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
        <div class="user_photo">${nameInPhoto(currentUser)}</div>
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
  getMessageHTML({ text, author, createdAt, to, id }) {
    if (author === "Viktor Vinitski") {
      return `
          <div class="messages_area-outgoing">
          <div class="messages_area-outgoing_item">
              <div class="outgoing_item-message">
                  <div class="outgoing_item-message_adressee">You</div>
                  <div class="outgoing_item-message_text">
                      ${text}
                      <div class="message_buttons">
                          <button onclick="editMessage(${id}, '${text}')"  class="message_edit-button">
                              <span class="iconify" data-inline="false"
                                  data-icon="ant-design:edit-filled"
                                  style="color: #d89ff2; font-size: 16px;"></span>
                          </button>
                          <button onclick='removeMessage(${id})' class="message_delete-button">
                              <span class="iconify" data-inline="false"
                                  data-icon="ant-design:delete-filled"
                                  style="color: #d89ff2; font-size: 16px;"></span>
                          </button>
                      </div>
                      <div class="outgoing_item-message_date">${createdAt}</div>
                  </div>
              </div>
              <div class="outgoing_item-photo">${nameInPhoto(author)}</div>
          </div>
      </div>
          `;
    }

    return `
      <div class="messages_area-incoming">
      <div class="messages_area-incoming_item">
          <div class="incoming_item-photo">${nameInPhoto(author)}</div>
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
      <div class="user_online-photo">${nameInPhoto(name)}</div>
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
      <div class="user_online-photo">${nameInPhoto(name)}</div>
      <div class="user_online-name">${name}</div>
        </div>
        `;
  }
}

const initLocalStorage = () => {
  const messagesData = localStorage.getItem(MESSAGES_LOCALSTORAGE_KEY)
  
  if(!messagesData){
    localStorage.setItem(MESSAGES_LOCALSTORAGE_KEY, JSON.stringify(messages))
  }
}
initLocalStorage()

const messageList = new MessageModel();
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
    "Anthony Martial",
  ],
  [
    "Bruno Fernandes",
    "Harry Kane",
    "Ronaldinho",
    "Paul Pogba",
    "Anthony Martial",
  ]
);

const headerView = new HeaderView("header-view");
const messagesView = new MessagesView("messages_area");
const activeUsers = new ActiveUsersView("users");
const allUsers = new PersonalUsersView("users");

const setCurrentUser = (user) => {
  messageList.setUser(user);
  headerView.display({ currentUser: user });
};

const showMessages = (skip, top, { author, dateFrom, dateTo, text } = {}) => {
  messageList.setCompanion("Cristiano Ronaldo");
  let msgs = messageList.getPage(skip, top, { author, dateFrom, dateTo, text });
  messagesView.display(msgs);
};

const showAllUsers = () => {
  allUsers.display();
};

const showActiveUsers = () => {
  activeUsers.display();
};

const addMessage = (msg) => {
  messageList.add(msg);
  showMessages(0, 20);
};

const editMessage = (id, msg) => {
  messageList.edit(id, msg);
  showMessages(0, 20);
};

const removeMessage = (id) => {
  messageList.remove(id);
  showMessages(0, 20);
};

const activateFilter = () => {
  let text = document.getElementById('findByText').value;
  let author = document.getElementById('findByUsername').value;
  let createdAt = document.getElementById('findByDate').value;
  return showMessages(0,20, {text, author, createdAt})
}

const addNewMessage = () => {
  let newMessage = document.getElementById('newMessage').value;
  addMessage({ text: newMessage })
  showMessages(0,30)
  document.getElementById('newMessage').value = ''
  let messageArea = document.getElementById('messages_area');
  messageArea.scrollTop = messageArea.scrollHeight
}
// const loadMessages = (skip, top) => {
//   showMessages(skip, top)
// }

function onPageLoad() {
  showActiveUsers();
  showAllUsers();
  showMessages(0, 25);
  setCurrentUser('Viktor Vinitski');
}

onPageLoad()


function userRegistration(){
  const loginFieldRegistration = document.getElementById('registerMenuLogin').value
  const passwordFieldRegistration = document.getElementById('registerMenuPassword').value
  const confirmFieldRegistration = document.getElementById('registerMenuConfirm').value
  if(passwordFieldRegistration === confirmFieldRegistration){
    let newUser = new Object()
    newUser.login = loginFieldRegistration;
    newUser.password = passwordFieldRegistration;
    console.log(newUser);
    registerUsersList.push(newUser)
    document.getElementById('register_menu').style.display = 'none'
    document.getElementById('sign_menu').style.display = 'flex'

  }
  return false
}

function userSign(){
  const loginFieldSign = document.getElementById('signMenuLogin').value
  const passwordFieldSign = document.getElementById('signMenuPassword').value
  let findedLogin = registerUsersList.find(item => item.login === loginFieldSign)
  if(findedLogin.password === passwordFieldSign){
    document.getElementById('sign_menu').style.display = 'none'
    document.getElementById('register_menu').style.display = 'none'
    document.getElementById('main_messages').style.display = 'flex'
    onPageLoad(findedLogin.login)
  }
}


