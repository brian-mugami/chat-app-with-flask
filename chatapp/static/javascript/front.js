var socketio = io();

const messages = document.getElementById("messages")

function createMessage(name, msg){
    const content = `
        <div class="text">
            <span>
                <strong>${name}</strong>: ${msg}
            </span>
            <span class="muted">
                ${new Date().toLocaleString()}
            </span>
        </div>
    `;
    messages.innerHTML += content;
};

socketio.on("message", (data)=> {
createMessage(data.name, data.message)
});

function sendMessage(){
    const message = document.getElementById("message")
    if (message.value === ""){
        return
    }
    socketio.emit("message",{data: message.value});
    message.value = "";
        };
