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
    qrcodeResult1.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`

    // TRANSFORMAR QRCODE EM PNG
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(inputValue)}`;
    qrcodeResult2.src = qrCodeUrl;

    qrcodeResult1.addEventListener("load", () => {
        aside.classList.add("active")
        qrcodeBtn.innerHTML = "QR Code Gerado!" 
        mainTag.classList.add('active')
    })
}

// EVENTO BOTÃO
qrcodeBtn.addEventListener("click", () => {
    qrcodeGenerate()
})

// EVENTO ENTER INPUY
qrcodeInput.addEventListener("keydown", () => {
    if(e.code === "Enter") {
        qrcodeGenerate()
    }
})