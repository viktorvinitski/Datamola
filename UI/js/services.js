class ChatApiService {
  constructor(){
    this.host = "https://jslabdb.datamola.com/"
  }

  registerUser ({ name, pass }) {
    const body = new FormData();
    body.append("name", name);
    body.append("pass", pass);
    return fetch(`${this.host}auth/register`, { method: "POST", body });
  };

  loginUser ({ name, pass }) {
    const body = new FormData();
    body.append("name", name);
    body.append("pass", pass);
    return fetch(`${this.host}auth/login`, { method: "POST", body })
      .then((response) => response.json())
      .then((result) => localStorage.setItem('token', result.token))
      .catch((error) => console.log("error", error));
  };

  getUsers () {
    const headers = new Headers();
    headers.append("Authorization", `Bearer ${localStorage.getItem("token")}`);
    const requestOptions = {
      method: "GET",
      headers,
      redirect: "follow",
    };
    return fetch(`${this.host}users`, requestOptions)
      .then((response) => response.json())
      .then((result) => (result))
      .catch((error) => console.log("error", error));
  };

  getMessages (skip, top) {
    let myHeaders = new Headers();
    myHeaders.append("Authorization",  `Bearer ${localStorage.getItem("token")}`);
    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    return fetch(`${this.host}messages?skip=${skip}&top=${top}`, requestOptions)
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => console.log("error", error));
      // &author=${author}&dateFrom=${dateFrom}&dateTo=${dateTo}&text=${text}
  };

  sendMessage ({ text, isPersonal, author }) {
    const headers = new Headers();
    headers.append("Authorization", `Bearer ${localStorage.getItem("token")}`);
    headers.append('Content-Type', 'application/json;charset=utf-8')
    const data = { text, isPersonal, author };
    let requestOptions = {
      method: "POST",
      headers,
      body: JSON.stringify(data),
      redirect: "follow",
    };
    return fetch(`${this.host}messages`, requestOptions)
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  };

  changeMessage(id, { text, isPersonal, author }){
    const headers = new Headers();
    headers.append("Authorization", `Bearer ${localStorage.getItem("token")}`);
    headers.append('Content-Type', 'application/json;charset=utf-8')
    const body = { text, isPersonal, author }
    let requestOptions = {
      method: "PUT",
      headers,
      body: JSON.stringify(body),
      redirect: "follow",
    };
    return fetch(`${this.host}messages/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => console.log("error", error));
  }

  deleteMessage(){
    var headers = new Headers();
    headers.append("Authorization", `Bearer ${localStorage.getItem("token")}`);
    let requestOptions = {
      method: 'DELETE',
      headers,
      redirect: 'follow'
    };
    return fetch("/message/123", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      }
}


const API = new ChatApiService()