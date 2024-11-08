const aside = document.querySelector(".config")
const qrcodeResult = document.querySelector("#qr-code img")
const qrcodeBtn = document.querySelector("#qr-input button")
const qrcodeInput = document.querySelector("#qr-input input")
console.log(qrcodeInput)

const qrcodeGenerate = () => {
    const inputValue = qrcodeInput.value;
    if (!inputValue) return; 
    
    // innerTetx === innerHTML
    qrcodeBtn.innerHTML = "Gerando QR Code"

    // MÉTODO DO QUERY PODEM SER PEGOS VIA PROPEIDADE (.)
    // API
    qrcodeResult.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`

    qrcodeResult.addEventListener("load", () => {
        aside.classList.add("active")
        qrcodeBtn.innerHTML = "QR Code Gerado!" 
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