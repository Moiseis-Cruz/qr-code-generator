let generateCode = document.getElementById("generate-code");

let inputText = document.getElementById("text");

let output = document.getElementById("output")

generateCode.addEventListener("click", () => {
    output.innerHTML = inputText.value
})