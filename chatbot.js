const API_URL = "http://127.0.0.1:5000"; // Backend API endpoint
const USER_MSG_ENDPOINT = "/api/messages";

// Adding the css and js of DialogFlow to index.html:

// Creating the css element
const link = document.createElement("link");
// Set the href attribute
link.href = "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css";
// Set the link rel attribute
link.rel = "stylesheet";
// Append it under the body (or any other element)
document.documentElement.appendChild(link);

// Creating the js script element
const script = document.createElement("script");
// Set the src attribute
script.src = "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js";
// Append it under the body (or any other element)
document.documentElement.appendChild(script);

// Creating the df-messanger element
const dfMessanger = document.createElement("df-messenger");
dfMessanger.location="eu";
dfMessanger.project_id="dgt-gcp-moe-test-chatbot-ai";
dfMessanger.agent_id="c7b5ccd4-0c78-45d1-9940-7028a4a6720f";
dfMessanger.display= 'flex';
dfMessanger.language_code="he-il";
dfMessanger.dir="rtl";
dfMessanger.max_query_length="-1";

// Creating the df-messanger-chat-bubble element
const dfMessangerChatBubble = document.createElement("df-messenger-chat-bubble");
dfMessanger.chat_title="הסוכן החכם";
dfMessanger.bot_actor_image="data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20id%3D%22Layer_2%22%20data-name%3D%22Layer%202%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2095.67%2095.67%22%3E%3Cdefs%3E%3Cstyle%3E%20%20%20%20%20%20.cls-1%20%7B%20%20%20%20%20%20%20%20fill%3A%20%23fff%3B%20%20%20%20%20%20%7D%20%20%20%20%20%20.cls-2%20%7B%20%20%20%20%20%20%20%20fill%3A%20%234c75b0%3B%20%20%20%20%20%20%7D%20%20%20%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22Layer_1-2%22%20data-name%3D%22Layer%201%22%3E%3Cg%3E%3Cg%3E%3Ccircle%20class%3D%22cls-2%22%20cx%3D%2247.83%22%20cy%3D%2247.83%22%20r%3D%2247.83%22%2F%3E%3Cpath%20class%3D%22cls-1%22%20d%3D%22M72.24%2C47.83c0%2C13.48-10.93%2C24.06-24.4%2C24.4-12.39.32-9.93%2C7.45-14.21%2C3.74-2.84-2.46-6.86-15.26-8.33-18.78-1.2-2.88-1.86-6.05-1.86-9.36%2C0-13.48%2C10.93-24.4%2C24.4-24.4s24.4%2C10.93%2C24.4%2C24.4Z%22%2F%3E%3C%2Fg%3E%3Cg%3E%3Ccircle%20class%3D%22cls-2%22%20cx%3D%2248.21%22%20cy%3D%2241.48%22%20r%3D%225.73%22%2F%3E%3Cpath%20class%3D%22cls-2%22%20d%3D%22M45.59%2C49.46h4.49c4.05%2C0%2C7.34%2C3.29%2C7.34%2C7.34h-19.18c0-4.05%2C3.29-7.34%2C7.34-7.34Z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";
dfMessanger.chat_close_icon="none";
dfMessanger.chat_icon="data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20id%3D%22Layer_2%22%20data-name%3D%22Layer%202%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2095.67%2095.67%22%3E%3Cdefs%3E%3Cstyle%3E%20%20%20%20%20%20.cls-1%20%7B%20%20%20%20%20%20%20%20fill%3A%20%23fff%3B%20%20%20%20%20%20%7D%20%20%20%20%20%20.cls-2%20%7B%20%20%20%20%20%20%20%20fill%3A%20%234c75b0%3B%20%20%20%20%20%20%7D%20%20%20%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22Layer_1-2%22%20data-name%3D%22Layer%201%22%3E%3Cg%3E%3Ccircle%20class%3D%22cls-2%22%20cx%3D%2247.83%22%20cy%3D%2247.83%22%20r%3D%2247.83%22%2F%3E%3Ccircle%20class%3D%22cls-1%22%20cx%3D%2247.83%22%20cy%3D%2247.83%22%20r%3D%2224.4%22%2F%3E%3Cg%3E%3Cpath%20class%3D%22cls-2%22%20d%3D%22M48.95%2C39.33l1.65%2C3.08c1.51%2C2.82%2C5.17%2C6.17%2C7.99%2C7.68l3.08%2C1.65-3.08%2C1.65c-2.82%2C1.51-6.48%2C4.54-7.99%2C7.36l-1.65%2C3.08-1.65-3.08c-1.51-2.82-4.6-5.91-7.42-7.42l-3.08-1.65%2C3.08-1.65c2.82-1.51%2C5.91-4.79%2C7.42-7.61l1.65-3.08Z%22%2F%3E%3Cpath%20class%3D%22cls-2%22%20d%3D%22M39.31%2C31.86l.72%2C1.34c.66%2C1.23%2C2.26%2C2.69%2C3.49%2C3.35l1.34.72-1.34.72c-1.23.66-2.83%2C1.98-3.49%2C3.21l-.72%2C1.34-.72-1.34c-.66-1.23-2.01-2.58-3.24-3.24l-1.34-.72%2C1.34-.72c1.23-.66%2C2.58-2.09%2C3.24-3.33l.72-1.34Z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

// Appending the chat-bubble to df-messanger
dfMessanger.appendChild(dfMessangerChatBubble);
// Appending df-messanger to Body
document.body.appendChild(dfMessanger);

// Adding css style attributes to the df-messanger element
const style = document.createElement("style");
style.textContent = `
  df-messenger {
    z-index: 600;
    position: fixed;
    bottom: 16px;
    right: 16px;
    /* עיצוב כללי */
    --df-messenger-font-color: #203055;
    --df-messenger-font-family: Google Sans;
    --df-messenger-chat-padding: 26px 11px 8px 24px;
    --df-messenger-chat-background: #ffffff;
    --df-messenger-message-user-background: #f5f6f8;
    --df-messenger-message-bot-background: #eef3fe;
    --df-messenger-message-user-radius: 14px;
    --df-messenger-message-bot-radius: 14px;
    --df-messenger-chat-window-height: 600px !important;
    --df-messenger-chat-window-width: 400px !important;
    /* הגדרות נוספות למקרה ויש צורך ברספונסיביות */
    max-height: 70vh;  /* 70% מגובה חלון הדפדפן */
    max-width: 400px;  /* ניתן להתאים את הרוחב לפי העיצוב */
  }
`;
// Append the style to the head
document.head.appendChild(style);


window.addEventListener('df-request-sent', (event) => {
  event.preventDefault();
  console.log('Request', event.detail.data.requestBody);
  console.log('query text', event.detail.data.requestBody.queryInput.text.text);

  const dfMessenger = document.querySelector('df-messenger');

  // Getting the user text message and POST it to the backend
  const user_message = event.detail.data.requestBody.queryInput.text.text;

  fetch(API_URL+USER_MSG_ENDPOINT, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ user_message })
})
.then(response => response.json())
.then(data => {
    if (data.success) {
        // fetchMessages(); // Reload messages after adding
        // messageInput.value = ""; // Clear input field
      console.log("post success");
      console.log("data.message: ", data.message);
      dfMessenger.renderCustomText(data.message, true);
    } else {
        alert("Error: " + data.error);
    }
})
.catch(error => console.error("Error sending message:", error));

});

// Select the Re-Index button
const button = document.getElementById("reindexDataStore");
const REINDEX_ENDPOINT = "/api/reindex"

// Add event listener for click
button.addEventListener("click", function () {
    console.log("Button clicked! Sending request...");

    // Send request to server
    fetch(API_URL+REINDEX_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "Hello Server!" })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Response from server:", data);
        // document.getElementById("responseMessage").innerText = data.reply;
    })
    .catch(error => console.error("Error:", error));
});
