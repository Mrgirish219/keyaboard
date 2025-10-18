
const audio = document.getElementById('audio1');
const body = document.body

document.body.addEventListener("keyup", (event) => {
    if (event.key.length == 1) {
        input.value += event.key;
    } else if (event.key == 'Backspace') {
        input.value = input.value.slice(0, -1)
    } else if (event.key == " ") {
        input.value += "";
    }

});

document.body.addEventListener("keydown", (event) => {
    let key = event.key.toLowerCase();
    if (key === " ") key = "space";
    const el = document.getElementById(key);
    if (el) {
        el.style.backgroundColor = "white";
    }
    audio.currentTime = 0;
    audio.play();
});

document.body.addEventListener("keyup", (event) => {
    let key = event.key.toLowerCase();
    if (key === " ") key = "space";
    const el = document.getElementById(key);
    if (el) {
        el.style.backgroundColor = "";
    }
});

