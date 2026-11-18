document.addEventListener("DOMContentLoaded", () => {
    const productButton = document.getElementById("button-product-consult");

    productButton.addEventListener("click", () => {
        window.location.href = "products.html";
    })
})

const loginModal = document.getElementById("login-modal");
const registerModal = document.getElementById("register-modal");

const btnLogin = document.getElementById("button-login");
const closeLogin = document.getElementById("close-login");
const closeRegister = document.getElementById("close-register");
const linkToRegister = document.getElementById("link-to-register");

btnLogin.addEventListener("click", () =>{
    loginModal.showModal();
})

closeLogin.addEventListener("click", () =>{
    loginModal.close();
})

closeRegister.addEventListener("click", () =>{
    registerModal.close();
})

linkToRegister.addEventListener("click", (e) => {
    e.preventDefault();
    loginModal.close();
    registerModal.showModal();
})