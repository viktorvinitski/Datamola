"use strict";
let defaultMessage = 10;
const nameInPhoto = (name) => {
  return name
    .split("")
    .filter((item) => item === item.toUpperCase())
    .join("");
};
const isNonEmptyString = (str) => {
  return str && typeof str === "string";
};
const dateHandler = (date) => {
  return `${new Date(date).toLocaleDateString()} ${new Date(date)
    .toLocaleTimeString()
    .slice(0, -3)}`;
};
let currentLogin;
let mainChatOpened;

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
      .reverse()
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
                          <button onclick="editMessage('${id}', '${text}')"  class="message_edit-button">
                              <span class="iconify" data-inline="false"
                                  data-icon="ant-design:edit-filled"
                                  style="color: #d89ff2; font-size: 16px;"></span>
                          </button>
                          <button onclick="removeMessage('${id}')" class="message_delete-button">
                              <span class="iconify" data-inline="false"
                                  data-icon="ant-design:delete-filled"
                                  style="color: #d89ff2; font-size: 16px;"></span>
                          </button>
                      </div>
                      <div class="outgoing_item-message_date">${dateHandler(
                        createdAt
                      )}</div>
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
                  <div class="incoming_item-message_date">${dateHandler(
                    createdAt
                  )}</div>
              </div>
          </div>
      </div>
     </div>
      `;
  }
}

class UsersView {
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
  getUsersHTML({ name }) {
    if (name) {
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
const allUsers = new UsersView("users");

const setCurrentUser = (user) => {
  currentLogin = user;
  headerView.display({ currentUser: user });
};

const showMessages = async (params) => {
  let msgs = await API.getMessages(params);
  messagesView.display(msgs);
};

const showAllUsers = async () => {
  const users = await API.getUsers();
  allUsers.display(users);
};

const showActiveUsers = async () => {
  const users = await API.getUsers();
  allUsers.display(users.filter((user) => user.isActive));
};

const addMessage = async () => {
  let newMessage = document.getElementById("newMessage").value;
  const msg = {
    text: newMessage,
    isPersonal: false,
    author: currentLogin,
  };
  await API.sendMessage(msg);
  document.getElementById("newMessage").value = "";
  showMessages({ skip: 0, top: defaultMessage, isPersonal: false });
};

const editMessage = async (id) => {
  let editedMessage = prompt("Изменить сообщение");
  const msg = {
    text: editedMessage,
    isPersonal: false,
    author: currentLogin,
  };
  await API.changeMessage(id, msg);
  showMessages({ skip: 0, top: defaultMessage, isPersonal: false });
};

const removeMessage = async (id) => {
  await API.deleteMessage(id);
  showMessages({ skip: 0, top: defaultMessage, isPersonal: false });
};

const activateFilter = () => {
  let text = document.getElementById("findByText").value;
  let author = document.getElementById("findByUsername").value;
  let dateFrom = document.getElementById("findByDateFrom").value;
  let dateTo = document.getElementById("findByDateTo").value;
  showMessages({ skip: 0, top, text, author, dateFrom, dateTo });
};

const cleanFilter = () => {
  document.getElementById("findByText").value = "";
  document.getElementById("findByUsername").value = "";
  document.getElementById("findByDateFrom").value = "";
  document.getElementById("findByDateTo").value = "";
  showMessages({
    skip: 0,
    top: defaultMessage,
    text,
    author,
    dateFrom,
    dateTo,
  });
};

const userRegistration = async () => {
  const login = document.getElementById("registerMenuLogin").value;
  const password = document.getElementById("registerMenuPassword").value;
  const confirmPassword = document.getElementById("registerMenuConfirm").value;
  if (password === confirmPassword && login && password && confirmPassword) {
    try {
      await API.registerUser({ name: login, pass: password });
    } catch (e) {
      console.error("Error register");
      return;
    }
    document.getElementById("register_menu").style.display = "none";
    // document.getElementById("sign_menu").style.display = "flex";
    document.getElementById("registerMenuLogin").value = "";
    document.getElementById("registerMenuPassword").value = "";
    document.getElementById("registerMenuConfirm").value = "";
    document.getElementById("registerMenuLogin").style.border = "none";
    document.getElementById("registerMenuPassword").style.border = "none";
    document.getElementById("registerMenuConfirm").style.border = "none";
    showAllUsers();
  } else {
    document.getElementById("registerMenuLogin").style.border = "2px solid red";
    alert("Введите логин или пароль!");
    document.getElementById("registerMenuPassword").style.border = "2px solid red";
    document.getElementById("registerMenuConfirm").style.border = "2px solid red";
  }
};

const userSign = async () => {
  const login = document.getElementById("signMenuLogin").value;
  const password = document.getElementById("signMenuPassword").value;
  if (login && password) {
    try {
      await API.loginUser({ name: login, pass: password });
    } catch {
      console.error("Error sign");
      return;
    }
    document.getElementById("sign_menu").style.display = "none";
    document.getElementById("register_menu").style.display = "none";
    document.getElementById("main_messages").style.display = "flex";
    document.getElementById("signMenuLogin").value = "";
    document.getElementById("signMenuPassword").value = "";
    document.getElementById("signMenuLogin").style.border = "none";
    document.getElementById("signMenuPassword").style.border = "none";
    showMessages({ skip: 0, top: 10, isPersonal: false });
    currentLogin = login;
    setCurrentUser(login);
    return currentLogin;
  } else {
    document.getElementById("signMenuLogin").style.border = "2px solid red";
    document.getElementById("signMenuLogin").value = "Wrong login or password";
    document.getElementById("signMenuPassword").style.border = "2px solid red";
  }
};

const loadMessages = (skip, top) => {
  if (defaultMessage === 0) {
    defaultMessage += 10;
    showMessages({ skip, top: defaultMessage });
    let messageArea = document.getElementById("messages_area");
    messageArea.scrollTop = messageArea.scrollHeight;
  }
  defaultMessage += 10;
  showMessages({ skip, top: defaultMessage });
  console.log(defaultMessage);
};

const mainChatOpen = () => {
  showMessages({ skip: 0, top: 10, isPersonal: false });
  document.getElementById("sendTo").textContent = `send to all`;
  defaultMessage = 0;
  mainChatOpened = true;
  return mainChatOpened;
};

const privateMessageOpen = (user) => {
  let currentCompanion = document.getElementById("user_name").textContent;
  showMessages({ skip: 0, top: 10, isPersonal: true, to: currentCompanion });
  if (currentCompanion !== "Guest") {
    document.getElementById("sendTo").textContent = `send to ${user}`;
    defaultMessage = 0;
    mainChatOpened = false;
    return mainChatOpened;
  }
};

function onPageLoad() {
  showAllUsers();
  setCurrentUser("Guest");
}
