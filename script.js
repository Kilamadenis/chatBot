const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const chatWindow = document.getElementById('chat-window');
function addtask(){
    const userMessage = userInput.value;
    const response = getResponse(userMessage);
    chatWindow.innerHTML += `<p>you: ${userMessage}</p>`;
    chatWindow.innerHTML +=`<p>BOT: ${response}</p>`;
    userInput.value = '';
}
function getResponse(userMessage){
    if (userMessage.includes('hello') || userMessage.includes('hi')){
        return 'iam doing well,thanks for asking!';
    }else{
        return 'i cant understand dat.wenonye!'
    }
}

