const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('whats', {
    onQRCode: (callback) => ipcRenderer.on('qr-code', (e, data) => callback(data)),
    onReady: (callback) => ipcRenderer.on('ready', callback),
    onResposta: (callback) => ipcRenderer.on('mensagem-enviada', (e, status) => callback(status)),
    disparar: (dados) => ipcRenderer.send('disparar-mensagem', dados)
});
