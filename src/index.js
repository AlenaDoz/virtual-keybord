const keyboard = document.createElement("div");
keyboard.classList.add("klava");
const note = document.createElement("h1");
note.classList.add("note");
const keyCode = [
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "Backspace",
  "Tab",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "[",
  "]",
  "\\",
  "Delete",
  "CapsLock",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  ";",
  "'",
  "Enter",
  "Shift",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  ".",
  ",",
  "/",
  "Shift",
  "Control",
  "Alt",
  "Meta",
  " ",
  "Meta",
  "Alt",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown",
  "ArrowRight",
];
note.innerHTML =
  "This keyboard is created on Mac. Keyboard shortcut for switching languages is SHIFT + OPTION";
document.body.append(keyboard);
document.body.append(note);

function createButton(key) {
  const btn = document.createElement("button");
  btn.setAttribute("data-key", key);
  btn.classList.add("knopka");
  btn.innerHTML = key;

  btn.addEventListener("mousedown", function () {
    btn.classList.add("knopka-active");
  });
  btn.addEventListener("mouseup", function () {
    btn.classList.remove("knopka-active");
  });

  if (key === "Backspace") {
    btn.classList.add("backspace");
  }
  if (key === "Tab") {
    btn.classList.add("tab");
  }
  if (key === "Delete") {
    btn.classList.add("delete");
  }
  if (key === "CapsLock") {
    btn.classList.add("capslock");
  }
  if (key === "Enter") {
    btn.classList.add("enter");
  }
  if (key === "Shift") {
    btn.classList.add("shift");
  }
  if (key === " ") {
    btn.classList.add("space");
  }
  if (key === "ArrowLeft") {
    btn.classList.add("arrow-left");
    btn.innerHTML = "&#9666;";
  }
  if (key === "ArrowRight") {
    btn.classList.add("arrow-right");
    btn.innerHTML = "&#9656;";
  }
  if (key === "ArrowUp") {
    const arrows = document.createElement("div");
    arrows.classList.add("arrows");
    keyboard.append(arrows);
    btn.classList.add("arrow-up");
    btn.innerHTML = "&#9652;";
    arrows.append(btn);
    return;
  }
  if (key === "ArrowDown") {
    btn.classList.add("arrow-down");
    btn.innerHTML = "&#9662;";
    document.querySelector(".arrows").append(btn);
    return;
  }
  if (key === "Control") {
    btn.classList.add("control");
  }
  if (key === "Meta") {
    btn.classList.add("command");
    btn.innerHTML = "Command";
  }
  if (key === "Alt") {
    btn.classList.add("option");
    btn.innerHTML = "⌥";
  }

  keyboard.append(btn);
}
for (let i = 0; i < keyCode.length; i++) {
  createButton(keyCode[i]);
}
document.addEventListener("keydown", function (event) {
  document.querySelectorAll(".knopka").forEach(function (element) {
    if (event.key === element.dataset.key) {
      element.classList.add("knopka-active");
    }
  });
});
document.addEventListener("keyup", function (event) {
  document.querySelectorAll(".knopka").forEach(function (element) {
    if (event.key === element.dataset.key) {
      element.classList.remove("knopka-active");
    }
  });
});
