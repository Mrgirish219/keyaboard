const keyboard = {
    Escape: 'esc',
    F1: 'f1',
    F2: 'f2',
    F3: 'f3',
    F4: 'f4',
    F5: 'f5',
    F6: 'f6',
    F7: 'f7',
    F8: 'f8',
    F9: 'f',
    F10: 'f1',
    F11: 'f11',
    F12: 'f12',
    Insert: 'insert',
    Delete: 'delete',
    "`": 'tild',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    0: '0',
    "-": 'min',
    "=": 'equal',
    Backspace: 'backspace',
    Tab: 'tab',
    q: 'q',
    w: 'w',
    e: 'e',
    r: 'r',
    t: 't',
    y: 'y',
    u: 'u',
    i: 'i',
    o: 'o',
    p: 'p',
    "[": 'brl',
    "]": 'brr',
    "\\": 'backslash',
    CapsLock: 'capslock',
    a: 'a',
    s: 's',
    d: 'd',
    f: 'f',
    g: 'g',
    h: 'h',
    j: 'j',
    k: 'k',
    l: 'l',
    ";": 'semicolon',
    "'": 'quote',
    Shift: 'shift',
    z: 'z',
    x: 'x',
    c: 'c',
    v: 'v',
    b: 'b',
    n: 'n',
    m: 'm',
    ",": 'comma',
    ".": 'dot',
    "/": 'slash',
    Control: 'ctrl',
    Fn: 'fn',
    Alt: 'alt',
    Win: 'win',
    " ": 'space'
};
const textInput = document.getElementById("input");
const audio = document.getElementById('audio1');


document.body.addEventListener("keydown", (event) => {
    const id = keyboard[event.key];
    if (id) {
        document.getElementById(id).style.backgroundColor = "white";
        document.getElementById(id).style.color = "black";

        audio.currentTime = 0;
        audio.play();


    }
});


document.body.addEventListener("keyup", (event) => {
    const id = keyboard[event.key];
    if (id) {
        document.getElementById(id).style.backgroundColor = "antiquewhite";
        document.getElementById(id).style.color = "";

    }
});

document.body.addEventListener("keydown", (event) => {
    if (event.key.length == 1) {
        textInput.value += event.key;
    } else if (event.key == 'Backspace') {
        textInput.value = textInput.value.slice(0, -1)
    } else if (event.key == " ") {
        textInput.value += "";
    }

});