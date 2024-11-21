const aside = document.querySelector(".config")
const mainTag = document.querySelector(".result")
const qrcodeResult1 = document.querySelector("#qr-code img")
const qrcodeResult2 = document.querySelector(".result img")
const qrcodeBtn = document.querySelector("#qr-input button")
const qrcodeInput = document.querySelector("#qr-input input")
const btnDownload = document.querySelector(".result a")
console.log(qrcodeInput)

const qrcodeGenerate = () => {
    const inputValue = qrcodeInput.value;
    if (!inputValue) return; 
    
    // innerTetx === innerHTML
    qrcodeBtn.innerHTML = "Gerando QR Code"
    
    // // MÉTODO DO QUERY PODEM SER PEGOS VIA PROPEIDADE (.)
    // API
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    qrcodeResult1.src = qrCodeUrl;
    qrcodeResult2.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputValue}`

    // REQUISIÇÃO
    qrcodeResult1.addEventListener("load", () => {
        aside.classList.add("active")
        qrcodeBtn.innerHTML = "QR Code Gerado!" 
        mainTag.classList.add('active')

        // CONFIGURAR BOTÃO DE DOWNLOAD / FUNÇÃO ASSÍNCRONA
        btnDownload.addEventListener("click", async () => {
            const response = await fetch(qrCodeUrl) // Baixar imagem para um blob
            const blob = await response.blob() // Converte para blob
            const blobUrl = URL.createObjectURL(blob) // Criar uma url para blob

            const link = document.createElement("a")
            link.href = blobUrl
            link.download = "qrcode.png"
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)

            URL.revokeObjectURL(blobUrl)
        });
    })
}

// Evento do Botão
qrcodeBtn.addEventListener("click", () => {
    qrcodeGenerate()
})

// EVENTO ENTER INPUT
qrcodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter") {
        qrcodeGenerate()
    }
})