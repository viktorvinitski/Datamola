"use strict";
const MESSAGES_LOCALSTORAGE_KEY = 'messages'
const USERS_LOCALSTORAGE_KEY = 'users'
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
    createdAt: '01.12.2020 00:00',
    author: "Katerina Sokol",
    isPersonal: true,
    to: "Viktor Vinitski",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '02.12.2020 00:00',
    author: "Viktor Vinitski",
    isPersonal: true,
    to: "Katerina Sokol",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '03.12.2020 00:00',
    author: "Katerina Sokol",
    isPersonal: true,
    to: "Viktor Vinitski",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '04.12.2020 00:00',
    author: "Katerina Sokol",
    isPersonal: true,
    to: "Viktor Vinitski",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '05.12.2020 00:00',
    author: "Katerina Sokol",
    isPersonal: true,
    to: "Viktor Vinitski",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '06.12.2020 00:00',
    author: "Katerina Sokol",
    isPersonal: true,
    to: "Viktor Vinitski",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '07.12.2020 00:00',
    author: "Katerina Sokol",
    isPersonal: true,
    to: "Viktor Vinitski",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '08.12.2020 00:00',
    author: "Katerina Sokol",
    isPersonal: true,
    to: "Viktor Vinitski",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '09.12.2020 00:00',
    author: "Katerina Sokol",
    isPersonal: true,
    to: "Viktor Vinitski",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '10.12.2020 00:00',
    author: "Katerina Sokol",
    isPersonal: true,
    to: "Viktor Vinitski",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '11.12.2020 00:00',
    author: "Katerina Sokol",
    isPersonal: true,
    to: "Viktor Vinitski",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '12.12.2020 00:00',
    author: "Katerina Sokol",
    isPersonal: true,
    to: "Viktor Vinitski",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '13.12.2020 00:00',
    author: "Viktor Vinitski",
    isPersonal: true,
    to: "Katerina Sokol",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '14.12.2020 00:00',
    author: "Katerina Sokol",
    isPersonal: true,
    to: "Viktor Vinitski",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '15.12.2020 00:00',
    author: "Viktor Vinitski",
    isPersonal: true,
    to: "Katerina Sokol",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '16.12.2020 00:00',
    author: "Katerina Sokol",
    isPersonal: true,
    to: "Viktor Vinitski",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '17.12.2020 00:00',
    author: "Katerina Sokol",
    isPersonal: true,
    to: "Viktor Vinitski",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '18.12.2020 00:00',
    author: "Viktor Vinitski",
    isPersonal: true,
    to: "Katerina Sokol",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '19.12.2020 00:00',
    author: "Viktor Vinitski",
    isPersonal: true,
    to: "Katerina Sokol",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '20.12.2020 00:00',
    author: "Viktor Vinitski",
    isPersonal: true,
    to: "Katerina Sokol",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '21.12.2020 00:00',
    author: "Viktor Vinitski",
    isPersonal: true,
    to: "Katerina Sokol",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '22.12.2020 00:00',
    author: "Viktor Vinitski",
    isPersonal: true,
    to: "Katerina Sokol",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '23.12.2020 00:00',
    author: "Viktor Vinitski",
    isPersonal: true,
    to: "Katerina Sokol",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '24.12.2020 00:00',
    author: "Katerina Sokol",
    isPersonal: true,
    to: "Viktor Vinitski",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '25.12.2020 00:00',
    author: "Katerina Sokol",
    isPersonal: true,
    to: "Viktor Vinitski",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '26.12.2020 00:00',
    author: "Viktor Vinitski",
    isPersonal: true,
    to: "Katerina Sokol",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '27.12.2020 00:00',
    author: "Viktor Vinitski",
    isPersonal: true,
    to: "Katerina Sokol",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '28.12.2020 00:00',
    author: "Viktor Vinitski",
    isPersonal: true,
    to: "Katerina Sokol",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '28.12.2020 00:00',
    author: "Viktor Vinitski",
    isPersonal: true,
    to: "Katerina Sokol",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '28.12.2020 00:00',
    author: "Katerina Sokol",
    isPersonal: true,
    to: "Viktor Vinitski",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '28.12.2020 00:00',
    author: "Viktor Vinitski",
    isPersonal: true,
    to: "Katerina Sokol",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '28.12.2020 00:00',
    author: "Katerina Sokol",
    isPersonal: true,
    to: "Viktor Vinitski",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '28.12.2020 00:00',
    author: "Katerina Sokol",
    isPersonal: true,
    to: "Viktor Vinitski",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '28.12.2020 00:00',
    author: "Katerina Sokol",
    isPersonal: true,
    to: "Viktor Vinitski",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '28.12.2020 00:00',
    author: "Viktor Vinitski",
    isPersonal: true,
    to: "Katerina Sokol",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '28.12.2020 00:00',
    author: "Katerina Sokol",
    isPersonal: true,
    to: "Viktor Vinitski",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '28.12.2020 00:00',
    author: "Viktor Vinitski",
    isPersonal: true,
    to: "Katerina Sokol",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '28.12.2020 00:00',
    author: "Viktor Vinitski",
    isPersonal: true,
    to: "Katerina Sokol",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '28.12.2020 00:00',
    author: "Viktor Vinitski",
    isPersonal: true,
    to: "Katerina Sokol",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '28.12.2020 00:00',
    author: "Katerina Sokol",
    isPersonal: true,
    to: "Viktor Vinitski",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '28.12.2020 00:00',
    author: "Viktor Vinitski",
    isPersonal: true,
    to: "Katerina Sokol",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '28.12.2020 00:00',
    author: "Viktor Vinitski",
    isPersonal: true,
    to: "Katerina Sokol",
  },
  {
    id: idGenerator(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: '28.12.2020 00:00',
    author: "Katerina Sokol",
    isPersonal: true,
    to: "Viktor Vinitski",
  }
];
let defaultMessage = 0;
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
let currentLogin
let mainChatOpened


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
  getPage(skip = 0, top = 10, { author, dateFrom, dateTo, text, isPersonal } = {}) {
    if(this._user === 'Guest'){
      return this._messages
    }
    let result = this._messages.filter((item) => item.author === this._user || item.author === this._companion);
    if (author) {
      result = result.filter((item) =>
        item.author.toLowerCase().includes(author.toLowerCase())
      );
    }
    if(isPersonal === false){
      result = result.filter(item => item.isPersonal === false)
    }
    if(isPersonal === true){
      result = result.filter(item => item.isPersonal === true)
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
      .reverse()
      .sort((a, b) => a.createdAt - b.createdAt)
      .slice(skip, skip + top)
      .reverse()
  }
  get(id) {
    return this._messages.find((item) => item.id === id);
  }
  add(msg) {
    if(!MessageModel.validate(msg)){
      return false;
    }
    msg.id = idGenerator();
    msg.createdAt = date;
    msg.author = this._user;
    if(!mainChatOpened){
      msg.to = this._companion
    }
    msg.isPersonal = !mainChatOpened
    this._messages.push(new Message(msg));
    this.save();
    return true;
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

class UserList {
  constructor() {
    this.users = [];
    this.activeUsers = [];
  }
  restore() {
    this.users = localStorage.getItem(USERS_LOCALSTORAGE_KEY)
  }
  save() {
    localStorage.setItem(USERS_LOCALSTORAGE_KEY, JSON.stringify(registerUsersList));
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
  getMessageHTML({ text, author, createdAt, id, isPersonal }) {
    if (author === messageList._user) {
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
  display(users) {
    if (!this.container) {
      this.container = document.getElementById(this.containerId);
    }
    this.container.innerHTML = users
      .map((user) => this.getUsersHTML(user))
      .join("");
  }
  getUsersHTML({name}) {
    if(name){
    return `
      <div id='userOnline' class="user_online">
      <div class="user_online-photo">${nameInPhoto(name)}</div>
      <div onclick="privateMessageOpen('${name}')" class="user_online-name">${name}</div>
        </div>
        `;
    }
  }
}

const userList = new UserList();

const initLocalStorage = () => {
  const messagesData = localStorage.getItem(MESSAGES_LOCALSTORAGE_KEY)
  if(!messagesData){
    localStorage.setItem(MESSAGES_LOCALSTORAGE_KEY, JSON.stringify(messages))
  }

  const usersData = localStorage.getItem(USERS_LOCALSTORAGE_KEY)
  if(!usersData){
    localStorage.setItem(USERS_LOCALSTORAGE_KEY, JSON.stringify(registerUsersList))
  }
}
initLocalStorage()



const messageList = new MessageModel();
const headerView = new HeaderView("header-view");
const messagesView = new MessagesView("messages_area");
const activeUsers = new ActiveUsersView("users");
const allUsers = new PersonalUsersView("users");


const getUsersFromLocalStorage = () => {
  const usersData = localStorage.getItem(USERS_LOCALSTORAGE_KEY)
  let data = JSON.parse(usersData).map(item => Object.values(item).slice(0,1)).toString().split(',')
  if(usersData !== []){
    userList.users = [...data]
  }
}

const setCurrentUser = (user) => {
  messageList.setUser(user);
  headerView.display({ currentUser: user });
};

const showMessages = async (skip, top) => {
  let msgs = await API.getMessages(skip, top);
  messagesView.display(msgs);
};

const showAllUsers = async () => {
  const users = await API.getUsers()
  allUsers.display(users);
};

const showActiveUsers = () => {
  activeUsers.display();
};

const addMessage = async () => {
  let newMessage = document.getElementById('newMessage').value;
  let msg = {
    text: newMessage,
    isPersonal: true,
    to: 'dimas',
    author: messageList._user,
  }
  await API.sendMessage(msg)
  showMessages(0, 10, {isPersonal: false});
};

const editMessage = (id, msg) => {
  if(mainChatOpened === true){
    messageList.edit(id, msg);
    showMessages(0, 10, {isPersonal: false});
  }
  if(mainChatOpened === false){
    messageList.edit(id, msg);
    showMessages(0, 10, {isPersonal: true});
  }
};

const removeMessage = (id) => {
  if (mainChatOpened === true) {
    messageList.remove(id);
    showMessages(0, 10, { isPersonal: false });
  }
  if (mainChatOpened === false) {
    messageList.remove(id);
    showMessages(0, 10, { isPersonal: true });
  }
};

const activateFilter = () => {
  let text = document.getElementById('findByText').value;
  let author = document.getElementById('findByUsername').value;
  let dateFrom = document.getElementById('findByDateFrom').value;
  let dateTo = document.getElementById('findByDateTo').value;
  showMessages(0,100, {text, author, dateFrom, dateTo})
}

const cleanFilter = () => {
  document.getElementById('findByText').value = '';
  document.getElementById('findByUsername').value = '';
  document.getElementById('findByDateFrom').value = '';
  document.getElementById('findByDateTo').value = '';
  showMessages(0,defaultMessage, {text, author, dateFrom, dateTo})
}

// const addNewMessage = () => {
//   // TODO: объединить в один метод
//   if(mainChatOpened === true){
//     let newMessage = document.getElementById('newMessage').value;
//     addMessage({ text: newMessage, isPersonal: false })
//     showMessages(0,10, {isPersonal: false})
//     document.getElementById('newMessage').value = ''
//     let messageArea = document.getElementById('messages_area');
//     messageArea.scrollTop = messageArea.scrollHeight
//   }
//   if(mainChatOpened === false){
//     let newMessage = document.getElementById('newMessage').value;
//     addMessage({ text: newMessage, isPersonal: true })
//     showMessages(0,10, {isPersonal: true})
//     document.getElementById('newMessage').value = ''
//     let messageArea = document.getElementById('messages_area');
//     messageArea.scrollTop = messageArea.scrollHeight
//   }
// }

const userRegistration = async () => {
  const login = document.getElementById('registerMenuLogin').value
  const password = document.getElementById('registerMenuPassword').value
  const confirmPassword = document.getElementById('registerMenuConfirm').value
  if(password === confirmPassword){
    try{
      await API.registerUser({name: login, pass: password})
    }catch{
      console.error('Error register')
      return
    }
    let newUser = {login, password}
    registerUsersList.push(newUser)
    userList.users.push(newUser.login)
    document.getElementById('register_menu').style.display = 'none'
    document.getElementById('sign_menu').style.display = 'flex'
    userList.save()
    showAllUsers()
  }
  return false
}

const userSign = async () => {
  const login = document.getElementById('signMenuLogin').value
  const password = document.getElementById('signMenuPassword').value
  const usersData = localStorage.getItem(USERS_LOCALSTORAGE_KEY)
  let data = JSON.parse(usersData)
  let findedLogin = data.find(item => item.login === login)
  if(findedLogin.password === password){
    try{
      await API.loginUser({name: login, pass: password})
    }catch{
      console.error('Error sign')
      return
    }
    document.getElementById('sign_menu').style.display = 'none'
    document.getElementById('register_menu').style.display = 'none'
    document.getElementById('main_messages').style.display = 'flex'
    setCurrentUser(findedLogin.login)
    messageList.setUser(findedLogin.login)
    currentLogin = findedLogin.login
    return currentLogin
  }
}

const loadMessages = (skip, top) => {
  if(defaultMessage === 0){
    defaultMessage += 10
    showMessages(skip, top = defaultMessage)
    let messageArea = document.getElementById('messages_area');
    messageArea.scrollTop = messageArea.scrollHeight
  }
  defaultMessage += 10
  showMessages(skip, top = defaultMessage)
  let messageArea = document.getElementById('messages_area');
  messageArea.scrollTop = messageArea.scrollHeight
  console.log(defaultMessage);
}

const mainChatOpen = () => {
  showMessages(0,10, {isPersonal: false})
  document.getElementById('sendTo').textContent = `send to all`
  defaultMessage = 0
  mainChatOpened = true
  return mainChatOpened
}

const privateMessageOpen = (user) => {
  messageList.setCompanion(user)
  showMessages(0, 10, {isPersonal: true})
  let currentUser = document.getElementById('user_name').textContent
  if(currentUser !== 'Guest'){
    document.getElementById('sendTo').textContent = `send to ${user}`
    defaultMessage = 0
    mainChatOpened = false
    return mainChatOpened
  }
}


function onPageLoad() {
  showActiveUsers();
  showAllUsers();
  showMessages(0,30)
  setCurrentUser('Guest');
  // getUsersFromLocalStorage()
}
