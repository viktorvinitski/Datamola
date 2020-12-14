"use strict";
let count = 1;
let defaultMessage = 0;
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
    if (author === currentLogin) {
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
  display(users) {
    if (!this.container) {
      this.container = document.getElementById(this.containerId);
    }
    this.container.innerHTML = users
      .filter(item => item.isActive === true)
      .map((user) => this.getUsersHTML(user))
      .join("");
  }
  getUsersHTML({name}) {
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

const headerView = new HeaderView("header-view");
const messagesView = new MessagesView("messages_area");
const activeUsers = new ActiveUsersView("users");
const allUsers = new PersonalUsersView("users");


const setCurrentUser = (user) => {
  currentLogin = user
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

const showActiveUsers = async () => {
  const users = await API.getUsers()
  allUsers.display(users);
};

const addMessage = async () => {
  let newMessage = document.getElementById('newMessage').value;
  const msg = {
    text: newMessage,
    isPersonal: false,
    author: currentLogin
  }
  await API.sendMessage(msg)
  document.getElementById('newMessage').value = ''
  showMessages(0, 10, {isPersonal: false, author: currentLogin});
};

const editMessage = async (id) => {
    let editedMessage = prompt('Изменить сообщение')
    const msg = {
      text: editedMessage,
      isPersonal: false,
      author: currentLogin
    }
    await API.changeMessage(id, msg);
    showMessages(0, 10, {isPersonal: false, author: currentLogin});
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
    document.getElementById('register_menu').style.display = 'none'
    document.getElementById('sign_menu').style.display = 'flex'
    showAllUsers()
  }
  return false
}

const userSign = async () => {
  const login = document.getElementById('signMenuLogin').value
  const password = document.getElementById('signMenuPassword').value
    try{
      await API.loginUser({name: login, pass: password})
    }catch{
      console.error('Error sign')
      return
    }
    document.getElementById('sign_menu').style.display = 'none'
    document.getElementById('register_menu').style.display = 'none'
    document.getElementById('main_messages').style.display = 'flex'
    showMessages(0,20, {author: login})
    currentLogin = login
    setCurrentUser(login)
    return currentLogin
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
  showMessages(0, 10, {isPersonal: true, to: currentUser})
  let currentUser = document.getElementById('user_name').textContent
  if(currentUser !== 'Guest'){
    document.getElementById('sendTo').textContent = `send to ${user}`
    defaultMessage = 0
    mainChatOpened = false
    return mainChatOpened
  }
}


function onPageLoad() {
  showAllUsers();
  showMessages(0,30)
  setCurrentUser('Guest');
}
