const chatWindow = document.getElementById("chat-window");
const inputField = document.getElementById("input-field");
const sendButton = document.getElementById("send-button");
let isExpectingQuestion = true;

const askQuestion = () => {
  const question = inputField.value;
  const message = `
    <div class="message">
      <div class="question">${question}</div>
    </div>
  `;
  chatWindow.innerHTML += message;
  isExpectingQuestion = false;
  inputField.value = "";
  inputField.setAttribute("placeholder", "Enter your answer...");
  inputField.focus();
};

const answerQuestion = (question) => {
  const answer = inputField.value;
  const message = `
    <div class="message">
      <div class="answer">${answer}</div>
    </div>
  `;
  chatWindow.innerHTML += message;
  isExpectingQuestion = true;
  inputField.value = "";
  inputField.setAttribute("placeholder", "Ask me anything...");
  inputField.focus();
};

inputField.focus();

const handleInput = () => {
  if (inputField.value !== "") {
    if (isExpectingQuestion) {
      askQuestion();
    } else {
      answerQuestion(chatWindow.lastElementChild.querySelector(".question").textContent);
    }
  }
};

inputField.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleInput();
  }
});

sendButton.addEventListener("click", () => {
  handleInput();
});
