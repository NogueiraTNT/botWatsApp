const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode');

let win, client;

function createWindow() {
    win = new BrowserWindow({
        width: 600,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,      
            nodeIntegration: false     
        }
    });

    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();

    client = new Client({ authStrategy: new LocalAuth() });

    client.on('qr', async (qr) => {
        const qrImg = await qrcode.toDataURL(qr);
        win.webContents.send('qr-code', qrImg);
    });

    client.on('ready', () => {
        win.webContents.send('ready');
        console.log('✅ WhatsApp pronto!');
    });

    client.on('qr', async (qr) => {
        console.log('[QR RECEBIDO]');
        const qrImg = await qrcode.toDataURL(qr);
        win.webContents.send('qr-code', qrImg);
    });

    client.initialize();
});


ipcMain.on('disparar-mensagem', async (event, dados) => {
    const { mensagem, imagem } = dados;
    const contatos = await client.getContacts();
    let contatosValidos = contatos.filter(c => c.id._serialized.endsWith('@c.us'));
    contatosValidos = shuffle(contatosValidos).slice(0, 300); // ou 300 depois

    try {
        const temImagem = imagem && imagem.startsWith('data:image');
        const temMensagem = mensagem && mensagem.trim() !== '';

        for (const contato of contatosValidos) {
            const numero = contato.id._serialized;

            if (temImagem) {
                const base64 = imagem.split(',')[1];
                const mime = imagem.match(/^data:(.*);base64,/)[1];
                const media = new MessageMedia(mime, base64, 'imagem');

                await client.sendMessage(numero, media, {
                    caption: temMensagem ? mensagem : undefined
                });

                console.log(`📸 Imagem + texto enviados para: ${numero}`);
            } else if (temMensagem) {
                await client.sendMessage(numero, mensagem);
                console.log(`✉️ Somente texto enviado para: ${numero}`);
            }

            const tempoEspera = Math.floor(Math.random() * (60000 - 10000 + 1)) + 10000;
            console.log(`⏳ Aguardando ${tempoEspera / 1000} segundos...`);
            await sleep(tempoEspera);
        }

        win.webContents.send('mensagem-enviada', true);
    } catch (err) {
        console.error(err);
        win.webContents.send('mensagem-enviada', false);
    }
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}




