const keyboard = document.createElement("div");
keyboard.classList.add("klava");
const note = document.createElement("h1");
note.classList.add("note");
const keyCode = [
  192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82,
  84, 89, 85, 73, 79, 80, 219, 221, 220, 46, 20, 65, 83, 68, 70, 71, 72, 74, 75,
  76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16, 17, 18,
  91, 32, 93, 18, 37, 38, 40, 39,
];
note.innerHTML =
  "This keyboard is created on Mac. Keyboard shortcut for switching languages is SHIFT + OPTION";
document.body.append(keyboard);
document.body.append(note);

function createButton(number) {
  const btn = document.createElement("button");
  btn.classList.add("knopka");
  btn.innerHTML = String.fromCharCode(number);
  keyboard.append(btn);
  btn.addEventListener("mousedown", function () {
    btn.classList.add("knopka-active");
  });
  btn.addEventListener("mouseup", function () {
    btn.classList.remove("knopka-active");
  });
}
for (let i = 0; i < keyCode.length; i++) {
  createButton(keyCode[i]);
}
