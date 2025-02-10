
// websocket.js
const ws = new WebSocket('ws://localhost:3000');

ws.onopen = () => {
  console.log('WebSocket connection opened.');
};

ws.onmessage = (event) => {
  console.log('Message received from server:', event.data);
};

ws.onclose = () => {
  console.log('WebSocket connection closed.');
};

ws.onerror = (error) => {
  console.error('WebSocket error:', error);
};

function sendMessage(message) {
  if (ws.readyState === WebSocket.OPEN) {
    ws.send(message);
  } else {
    console.error('WebSocket is not open.');
  }
}
