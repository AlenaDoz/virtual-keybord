const container = document.createElement("div");
container.classList.add("container");
document.body.append(container);
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
  ",",
  ".",
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
const textarea = document.createElement("textarea");
textarea.classList.add("textarea");
container.append(textarea);

const enLittle = "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./";
const enCapital = '~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?';
const enLittleArray = enLittle.split("");
const enCapitalArray = enCapital.split("");
note.innerHTML =
  "This keyboard is created on Mac. Keyboard shortcut for switching languages is SHIFT + OPTION";
container.append(keyboard);
container.append(note);

const enLittleLetter = "qwertyuiopasdfghjklzxcvbnm";
const enCapitalLetter = enLittleLetter.toUpperCase();
const enLittleLetters = enLittleLetter.split("");
const enCapitalLetters = enCapitalLetter.split("");

function createButton(key) {
  const btn = document.createElement("button");
  btn.setAttribute("data-key", key);
  btn.classList.add("knopka");

  btn.addEventListener("mousedown", function () {
    btn.classList.add("knopka-active");
  });
  btn.addEventListener("mouseup", function () {
    btn.classList.remove("knopka-active");
  });
  btn.innerHTML = key;

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
  if (key === "q") {
    btn.classList.add("caps-check");
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
  if (event.key === "Tab") {
    event.preventDefault();
    const textarea = document.querySelector(".textarea");
    const start = textarea.selectionEnd;
    const val1 = textarea.value.split("").slice(start);
    const val2 = textarea.value.split("").slice(0, start);
    const val = [...val2, "    ", ...val1].join("");
    textarea.value = val;
    textarea.selectionStart = start + 4;
    textarea.selectionEnd = start + 4;
  }
  if (event.key === "ArrowUp") {
    event.preventDefault();
    const textarea = document.querySelector(".textarea");
    const start = textarea.selectionEnd;
    const val1 = textarea.value.split("").slice(start);
    const val2 = textarea.value.split("").slice(0, start);
    const val = [...val2, "▴", ...val1].join("");
    textarea.value = val;
    textarea.selectionStart = start + 1;
    textarea.selectionEnd = start + 1;
  }
  if (event.key === "ArrowDown") {
    event.preventDefault();
    const textarea = document.querySelector(".textarea");
    const start = textarea.selectionEnd;
    const val1 = textarea.value.split("").slice(start);
    const val2 = textarea.value.split("").slice(0, start);
    const val = [...val2, "▾", ...val1].join("");
    textarea.value = val;
    textarea.selectionStart = start + 1;
    textarea.selectionEnd = start + 1;
  }
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    const textarea = document.querySelector(".textarea");
    const start = textarea.selectionEnd;
    const val1 = textarea.value.split("").slice(start);
    const val2 = textarea.value.split("").slice(0, start);
    const val = [...val2, "◂", ...val1].join("");
    textarea.value = val;
    textarea.selectionStart = start + 1;
    textarea.selectionEnd = start + 1;
  }
  if (event.key === "ArrowRight") {
    event.preventDefault();
    const textarea = document.querySelector(".textarea");
    const start = textarea.selectionEnd;
    const val1 = textarea.value.split("").slice(start);
    const val2 = textarea.value.split("").slice(0, start);
    const val = [...val2, "▸", ...val1].join("");
    textarea.value = val;
    textarea.selectionStart = start + 1;
    textarea.selectionEnd = start + 1;
  }

  if (event.key === "Shift") {
    document.querySelectorAll(".knopka").forEach(function (element) {
      if (enLittleArray.indexOf(element.dataset.key) > -1) {
        element.innerHTML =
          enCapitalArray[enLittleArray.indexOf(element.dataset.key)];
        element.dataset.key =
          enCapitalArray[enLittleArray.indexOf(element.dataset.key)];
      }
    });
  }
  if (event.key.length === 1) {
    event.preventDefault();
    const input = document.querySelector(".caps-check").innerHTML === "q"?event.key.toLowerCase():event.key.toUpperCase()
    const textarea = document.querySelector(".textarea");
    const start = textarea.selectionEnd;
    const val1 = textarea.value.split("").slice(start);
    const val2 = textarea.value.split("").slice(0, start);
    const val = [...val2, input, ...val1].join("");
    textarea.value = val;
    textarea.selectionStart = start + 1;
    textarea.selectionEnd = start + 1;
  }
  if (event.key === "CapsLock") {
    console.log(event.key);
    if (
      enLittleLetters.indexOf(document.querySelector(".caps-check").innerHTML) >
      -1
    ) {
      document.querySelectorAll(".knopka").forEach(function (element) {
        if (enLittleLetters.indexOf(element.dataset.key) > -1) {
          element.innerHTML =
            enCapitalLetters[enLittleLetters.indexOf(element.dataset.key)];
          element.dataset.key =
            enCapitalLetters[enLittleLetters.indexOf(element.dataset.key)];
        }
      });
    }
  }
  document.querySelectorAll(".knopka").forEach(function (element) {
    if (event.key === element.dataset.key) {
      element.classList.add("knopka-active");
    }

  });
});

document.addEventListener("keyup", function (event) {
  if (event.key === "Shift") {
    document.querySelectorAll(".knopka").forEach(function (element) {
      if (enCapitalArray.indexOf(element.dataset.key) > -1) {
        element.innerHTML =
          enLittleArray[enCapitalArray.indexOf(element.dataset.key)];
        element.dataset.key =
          enLittleArray[enCapitalArray.indexOf(element.dataset.key)];
      }
    });
  }
  if (event.key === "CapsLock") {
    document.querySelectorAll(".knopka").forEach(function (element) {
      if (enCapitalLetters.indexOf(element.dataset.key) > -1) {
        element.innerHTML =
          enLittleLetters[enCapitalLetters.indexOf(element.dataset.key)];
        element.dataset.key =
          enLittleLetters[enCapitalLetters.indexOf(element.dataset.key)];
      }
    });
  }
  document.querySelectorAll(".knopka").forEach(function (element) {
    if (event.key === element.dataset.key) {
      element.classList.remove("knopka-active");
    }
  });
});
document.querySelector(".klava").addEventListener("click", function (event) {
  const textarea = document.querySelector(".textarea");
  if (event.target.classList.contains("knopka")) {
    textarea.focus();

    if (event.target.dataset.key === "Shift") {
      if (!event.target.classList.contains("shift-active")) {
        event.target.classList.add("shift-active");

        document.querySelectorAll(".knopka").forEach(function (element) {
          if (enLittleArray.indexOf(element.dataset.key) > -1) {
            element.innerHTML =
              enCapitalArray[enLittleArray.indexOf(element.dataset.key)];
            element.dataset.key =
              enCapitalArray[enLittleArray.indexOf(element.dataset.key)];
          }
        });
      } else {
        document.querySelector(".shift").classList.remove("shift-active");
        document.querySelectorAll(".knopka").forEach(function (element) {
          if (enCapitalArray.indexOf(element.dataset.key) > -1) {
            element.innerHTML =
              enLittleArray[enCapitalArray.indexOf(element.dataset.key)];
            element.dataset.key =
              enLittleArray[enCapitalArray.indexOf(element.dataset.key)];
          }
        });
      }
      return;
    }
    if (event.target.dataset.key === "CapsLock") {
      if (enLittleLetters.indexOf(document.querySelector(".caps-check").innerHTML) > -1) {
        event.target.classList.add("knopka-active");
        document.querySelectorAll(".knopka").forEach(function (element) {
          if (enLittleLetters.indexOf(element.dataset.key) > -1) {
            element.innerHTML =
              enCapitalLetters[enLittleLetters.indexOf(element.dataset.key)];
            element.dataset.key =
              enCapitalLetters[enLittleLetters.indexOf(element.dataset.key)];
          }
        });
      } else if (enCapitalLetters.indexOf(document.querySelector(".caps-check").innerHTML) > -1) {
        event.target.classList.remove("knopka-active");
        document.querySelectorAll(".knopka").forEach(function (element) {
          if (enCapitalLetters.indexOf(element.dataset.key) > -1) {
            element.innerHTML =
              enLittleLetters[enCapitalLetters.indexOf(element.dataset.key)];
            element.dataset.key =
              enLittleLetters[enCapitalLetters.indexOf(element.dataset.key)];
          }
        });
      }
      return;
    }
if (event.target.dataset.key === "Backspace") {
  if (textarea.selectionStart === textarea.selectionEnd) {
    const start = textarea.selectionEnd;
    const val1 = textarea.value.split("").slice(start);
    const val2 = textarea.value.split("").slice(0, start - 1);
    const val = [...val2, ...val1].join("");
    textarea.value = val;
    textarea.selectionStart = start - 1;
    textarea.selectionEnd = start - 1;
  } 
  else {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const val1 = textarea.value.split("").slice(end);
    const val2 = textarea.value.split("").slice(0, start);
    const val = [...val2, ...val1].join("");
    textarea.value = val;
    textarea.selectionStart = start;
    textarea.selectionEnd = start;
  }
  
    return;
}

    const start = textarea.selectionEnd;
    const val1 = textarea.value.split("").slice(start);
    const val2 = textarea.value.split("").slice(0, start);
    const val = [...val2, event.target.dataset.key, ...val1].join("");
    textarea.value = val;
    textarea.selectionStart = start + 1;
    textarea.selectionEnd = start + 1;
    if (document.querySelector(".shift-active")) {
      document.querySelector(".shift").classList.remove("shift-active");
      document.querySelectorAll(".knopka").forEach(function (element) {
        if (enCapitalArray.indexOf(element.dataset.key) > -1) {
          element.innerHTML =
            enLittleArray[enCapitalArray.indexOf(element.dataset.key)];
          element.dataset.key =
            enLittleArray[enCapitalArray.indexOf(element.dataset.key)];
        }
      });
    }
  }
});
