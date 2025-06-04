const qr = document.getElementById('qr');
const statusDiv = document.getElementById('status');
const botao = document.getElementById('botao');
const mensagemInput = document.getElementById('mensagem');
const imagemInput = document.getElementById('imagem');

window.whats.onQRCode((data) => {
    qr.src = data;
    qr.hidden = false;
    statusDiv.textContent = '📷 Escaneie o QR Code para conectar...';
});

window.whats.onReady(() => {
    qr.hidden = true;
    botao.disabled = false;
    statusDiv.textContent = '✅ Conectado! Pronto para disparar mensagens.';
});

window.whats.onResposta((sucesso) => {
    alert(sucesso ? '✅ Mensagem enviada com sucesso!' : '❌ Erro ao enviar a mensagem.');
});

botao.addEventListener('click', () => {
    const texto = mensagemInput.value;
    const imagem = imagemInput.files[0];

    if (!texto && !imagem) {
        alert('Digite uma mensagem ou selecione uma imagem!');
        return;
    }

    const reader = new FileReader();
    reader.onload = () => {
        const imagemBase64 = imagem ? reader.result : null;
        window.whats.disparar({
            mensagem: texto,
            imagem: imagemBase64
        });
    };

    if (imagem) {
        reader.readAsDataURL(imagem);
    } else {
        window.whats.disparar({
            mensagem: texto,
            imagem: null
        });
    }
});
