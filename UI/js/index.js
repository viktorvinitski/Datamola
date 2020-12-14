function openUserMenu() {
  document.getElementById("messages").style.display = "none";
  document.getElementById("sider").style.display = "flex";
}

function closeUserMenu() {
  document.getElementById("sider").style.display = "none";
  document.getElementById("messages").style.display = "flex";
}

function openSignMenu() {
  document.getElementById("main_messages").style.display = "none";
  document.getElementById("sign_menu").style.display = "flex";
  document.getElementById("sign_in-link").style.display = "none";
  document.getElementById("header").innerHTML = `
    <div class="logo">
    <a href="#!" class="logo_item">
        <img src="img/Logo.png" alt="logo">
    </a>
    </div>
    <a onclick="returnToChat()" id="return_button" href="#!" class="return_button">
    <span class="iconify" data-inline="false" data-icon="ic:sharp-keyboard-return" style="font-size: 24px; color: white;"></span>
    </a>
    `;
}

function returnToChat() {
  document.getElementById("sign_menu").style.display = "none";
  document.getElementById("register_menu").style.display = "none";
  document.getElementById("main_messages").style.display = "flex";
  document.getElementById("return_button").style.display = "none";
  document.getElementById("error_page").style.display = "none";
  document.getElementById("header").innerHTML = `
    <div class="logo">
    <a href="#!" class="logo_item">
        <img src="img/Logo.png" alt="logo">
    </a>
    </div>
    <a onclick="openSignMenu()" id="sign_in-link" href="#!" class="sign_in-link">
                    <span class="iconify" 
                        data-inline="false" 
                        data-icon="clarity:sign-in-line"
                        style="color: #ffffff; font-size: 24px;"></span>
                </a>
    `;
}

function openRegisterMenu() {
  document.getElementById("sign_menu").style.display = "none";
  document.getElementById("register_menu").style.display = "flex";
  document.getElementById("header").innerHTML = `
    <div class="logo">
    <a href="#!" class="logo_item">
        <img src="img/Logo.png" alt="logo">
    </a>
    </div>
    <a onclick="returnToChat()" id="return_button" href="#!" class="return_button">
    <span class="iconify" data-inline="false" data-icon="ic:sharp-keyboard-return" style="font-size: 24px; color: white;"></span>
    </a>
    `;
}

function openErrorPage(){
  document.getElementById("register_menu").style.display = "none";
  document.getElementById('error_page').style.display = 'flex'
}
