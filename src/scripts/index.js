let btnGenerateCode = document.getElementById("generate-code");

let inputText = document.getElementById("text");

let output = document.getElementById("output")

btnGenerateCode.addEventListener("click", () => {
    output.innerHTML = `<img id="img-code" src="https://api.qrserver.com/v1/create-qr-code/?data=${inputText.value}&amp;size=200x200" alt="QR Code">`
})