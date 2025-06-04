# 💼 Plataforma de Disparo de Mensagens via WhatsApp com Electron

> 🔧 Desenvolvido com: `Electron`, `Node.js`, `JavaScript`, `HTML`, `CSS`  
> 📌 Projeto 100% autoral e fullstack, com foco em **automação segura** via WhatsApp.

🧠 **Desenvolvimento Individual**: Este programa foi criado para **envio automatizado de mensagens no WhatsApp Web**, com foco em segurança e desempenho, utilizando o pacote `whatsapp-web.js` e recursos do `Electron`.

---

## 🚀 Sobre o Projeto

Este sistema tem como objetivo facilitar o envio de mensagens em massa para contatos do WhatsApp, seja com texto, imagem ou ambos juntos. Ele é ideal para campanhas corporativas, comunicações internas ou qualquer uso profissional que exija automatização.

> Todo o desenvolvimento — desde a interface gráfica até a integração com o WhatsApp Web — foi feito de forma independente, buscando entregar uma solução funcional, robusta e fácil de usar.

---

## 🏆 Diferenciais do Sistema

- 🔐 **Autenticação persistente** (sem necessidade de escanear QR Code a cada abertura)
- ⏱️ **Intervalo randômico entre envios** (de 10 a 60 segundos) para evitar bloqueios
- 🎯 **Seleção aleatória de até 300 contatos**
- 🖼️ **Envio de imagem com legenda na mesma mensagem**
- 📦 **Compilação como app standalone (.exe)** — sem necessidade de terminal
- 🧩 **Código modular, legível e fácil de adaptar**

---

## 🧩 Funcionalidades Principais

- Leitura de QR Code e login persistente com `LocalAuth`
- Envio de mensagens com/sem mídia
- Suporte a imagens em base64
- Delays randômicos para simular comportamento humano
- Seleção automática e aleatória de contatos individuais
- Log de envio em tempo real no console

---

## 🛠️ Tecnologias Utilizadas

- [Electron](https://www.electronjs.org/) – app desktop com JavaScript
- [Node.js](https://nodejs.org/) – motor de execução JS
- [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js) – integração com WhatsApp Web
- [QRCode](https://www.npmjs.com/package/qrcode) – geração de imagem QR
- HTML5, CSS3, JavaScript

---

## 📁 Estrutura do Projeto (resumo)

```txt
📁 bot-eletron/
├── index.html               # Interface gráfica do app
├── main.js                  # Processo principal Electron + integração com WhatsApp
├── preload.js               # Bridge segura entre Electron e Renderer
├── renderer.js              # Manipulação do DOM + comunicação frontend
├── package.json             # Dependências e scripts
├── icon.ico                 # Ícone para o executável
└── README.md                # Documentação do projeto
```
# 🚀 Como Executar

## 1. Clone o repositório:
```
git clone https://github.com/NogueiraTNT/botWhatsApp.git
cd bot-whatsapp
```
## 2. Instale as dependências:
```
npm install
```
## 3. Compile para gerar um executável (.exe):
```
npm run dist
```



## 📚 Aprendizados
```md
- Prática com Electron e arquitetura de aplicações desktop
- Controle de autenticação com LocalAuth
- Manipulação de arquivos base64 para envio de mídia
- Estratégias de prevenção contra bloqueios (como delays e mensagens combinadas)
- Empacotamento de aplicativos com electron-builder
```
## 📬 Contato
Caso tenha interesse em conhecer mais ou contribuir com melhorias, entre em contato:
```md
- Email: nogueirad345@gmail.com
- LinkedIn: [Nogueira](https://linkedin.com/in/daniel-nogueira-64b556140)
- GitHub: [@NogueiraTNT](https://github.com/NogueiraTNT)
```
