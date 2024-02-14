import WebSocket from 'ws';

// Créer un serveur WebSocket
const wss = new WebSocket.Server({ port: 3009 });

// Écouter les connexions WebSocket
wss.on('connection', (ws) => {
    console.log('Nouvelle connexion WebSocket');

    // Écouter les messages du client
    ws.on('message', (message) => {
        console.log(`Reçu: ${message}`);
    });

    // Envoyer un message au client
    ws.send('Bienvenue sur le serveur WebSocket!');
});
