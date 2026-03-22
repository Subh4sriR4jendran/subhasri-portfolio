function toggleChat() {
    let chat = document.getElementById("chatbox");
    chat.style.display = chat.style.display === "block" ? "none" : "block";
}

function reply(type) {
    let response = document.getElementById("response");

    if (type === "skills") {
        response.innerHTML = "I know .NET, React, AngularJS, SharePoint!";
    }
    else if (type === "projects") {
        response.innerHTML = "Built Password Manager, SharePoint Portal & UI components.";
    }
    else if (type === "contact") {
        response.innerHTML = "Email: subasri.r@o365developeraccount.onmicrosoft.com";
    }
}