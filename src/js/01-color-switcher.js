const btStart = document.querySelector("[data-start]");

const btStop = document.querySelector("[data-stop]");

const body = document.querySelector("body")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timerId = null;

const onChangeColor = (event) => {
    event.currentTarget.disabled = true;
    btStop.disabled = false;

    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor()
    }, 1000);
}
btStart.addEventListener("click", onChangeColor)

btStop.addEventListener("click", (event) => {
    clearInterval(timerId)
    event.currentTarget.disabled = true;
    btStart.disabled = false;
})