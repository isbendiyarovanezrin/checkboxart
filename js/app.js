"use strict";

const main = document.querySelector("main");
const desktop = window.matchMedia("(min-width: 650px)");
const tablet = window.matchMedia("(min-width: 500px) and (max-width: 650px)");
const mobile1 = window.matchMedia("(min-width: 350px) and (max-width: 500px)");
const mobile2 = window.matchMedia("(max-width: 350px)");

if (desktop.matches) {
  for (let i = 0; i < 40; i++) {
    const div = document.createElement("div");
    div.dataset.div = i + 1;
    main.appendChild(div);

    for (let j = 0; j < 40; j++) {
      const input = document.createElement("input");
      input.type = "checkbox";
      input.dataset.input = j + 1;
      div.appendChild(input);
    }
  }
} else if (tablet.matches) {
  for (let i = 0; i < 40; i++) {
    const div = document.createElement("div");
    main.appendChild(div);

    for (let j = 0; j < 35; j++) {
      const input = document.createElement("input");
      input.type = "checkbox";
      div.appendChild(input);
    }
  }
} else if (mobile1.matches) {
  for (let i = 0; i < 40; i++) {
    const div = document.createElement("div");
    main.appendChild(div);

    for (let j = 0; j < 25; j++) {
      const input = document.createElement("input");
      input.type = "checkbox";
      div.appendChild(input);
    }
  }
} else if (mobile2.matches) {
  for (let i = 0; i < 40; i++) {
    const div = document.createElement("div");
    main.appendChild(div);

    for (let j = 0; j < 21; j++) {
      const input = document.createElement("input");
      input.type = "checkbox";
      div.appendChild(input);
    }
  }
}

// checked checkbox positions
const position = [
  { div: 1, input: 14 },
  { div: 1, input: 32 },
  { div: 2, input: 13 },
  { div: 2, input: 33 },
  { div: 3, input: 12 },
  { div: 3, input: 34 },
  { div: 4, input: 11 },
  { div: 4, input: 35 },
  { div: 5, input: 10 },
  { div: 5, input: 36 },
  { div: 6, input: 10 },
  { div: 6, input: 36 },
  { div: 7, input: 10 },
  { div: 7, input: 36 },
  { div: 8, input: 10 },
  { div: 8, input: 15 },
  { div: 8, input: 16 },
  { div: 8, input: 17 },
  { div: 8, input: 18 },
  { div: 8, input: 18 },
  { div: 8, input: 18 },
  { div: 8, input: 28 },
  { div: 8, input: 29 },
  { div: 8, input: 30 },
  { div: 8, input: 31 },
  { div: 8, input: 36 },
  { div: 9, input: 10 },
  { div: 9, input: 14 },
  { div: 9, input: 16 },
  { div: 9, input: 17 },
  { div: 9, input: 19 },
  { div: 9, input: 27 },
  { div: 9, input: 29 },
  { div: 9, input: 30 },
  { div: 9, input: 32 },
  { div: 9, input: 36 },
  { div: 9, input: 37 },
  { div: 9, input: 38 },
  { div: 9, input: 39 },
  { div: 10, input: 10 },
  { div: 10, input: 14 },
  { div: 10, input: 16 },
  { div: 10, input: 17 },
  { div: 10, input: 19 },
  { div: 10, input: 27 },
  { div: 10, input: 29 },
  { div: 10, input: 30 },
  { div: 10, input: 32 },
  { div: 10, input: 36 },
  { div: 10, input: 39 },
  { div: 11, input: 7 },
  { div: 11, input: 8 },
  { div: 11, input: 9 },
  { div: 11, input: 10 },
  { div: 11, input: 15 },
  { div: 11, input: 16 },
  { div: 11, input: 17 },
  { div: 11, input: 18 },
  { div: 11, input: 28 },
  { div: 11, input: 29 },
  { div: 11, input: 30 },
  { div: 11, input: 31 },
  { div: 11, input: 36 },
  { div: 11, input: 39 },
  { div: 12, input: 7 },
  { div: 12, input: 10 },
  { div: 12, input: 36 },
  { div: 12, input: 38 },
  { div: 13, input: 7 },
  { div: 13, input: 10 },
  { div: 13, input: 36 },
  { div: 13, input: 37 },
  { div: 14, input: 8 },
  { div: 14, input: 10 },
  { div: 14, input: 36 },
  { div: 15, input: 9 },
  { div: 15, input: 10 },
  { div: 15, input: 36 },
  { div: 16, input: 10 },
  { div: 16, input: 21 },
  { div: 16, input: 25 },
  { div: 16, input: 36 },
  { div: 17, input: 10 },
  { div: 17, input: 22 },
  { div: 17, input: 23 },
  { div: 17, input: 24 },
  { div: 17, input: 36 },
  { div: 18, input: 10 },
  { div: 18, input: 36 },
  { div: 19, input: 10 },
  { div: 19, input: 36 },
  { div: 20, input: 10 },
  { div: 20, input: 36 },
  { div: 21, input: 11 },
  { div: 21, input: 36 },
  { div: 22, input: 12 },
  { div: 22, input: 19 },
  { div: 22, input: 20 },
  { div: 22, input: 21 },
  { div: 22, input: 22 },
  { div: 22, input: 23 },
  { div: 22, input: 24 },
  { div: 22, input: 25 },
  { div: 22, input: 26 },
  { div: 22, input: 27 },
  { div: 22, input: 28 },
  { div: 22, input: 35 },
  { div: 23, input: 13 },
  { div: 23, input: 19 },
  { div: 23, input: 20 },
  { div: 23, input: 21 },
  { div: 23, input: 22 },
  { div: 23, input: 23 },
  { div: 23, input: 24 },
  { div: 23, input: 25 },
  { div: 23, input: 26 },
  { div: 23, input: 27 },
  { div: 23, input: 28 },
  { div: 23, input: 34 },
  { div: 24, input: 14 },
  { div: 24, input: 20 },
  { div: 24, input: 21 },
  { div: 24, input: 22 },
  { div: 24, input: 23 },
  { div: 24, input: 24 },
  { div: 24, input: 25 },
  { div: 24, input: 26 },
  { div: 24, input: 27 },
  { div: 24, input: 33 },
  { div: 25, input: 15 },
  { div: 25, input: 21 },
  { div: 25, input: 22 },
  { div: 25, input: 23 },
  { div: 25, input: 24 },
  { div: 25, input: 25 },
  { div: 25, input: 26 },
  { div: 25, input: 32 },
  { div: 26, input: 16 },
  { div: 26, input: 31 },
  { div: 27, input: 17 },
  { div: 27, input: 30 },
  { div: 28, input: 18 },
  { div: 28, input: 29 },
  { div: 29, input: 19 },
  { div: 29, input: 20 },
  { div: 29, input: 21 },
  { div: 29, input: 22 },
  { div: 29, input: 23 },
  { div: 29, input: 24 },
  { div: 29, input: 25 },
  { div: 29, input: 26 },
  { div: 29, input: 27 },
  { div: 29, input: 28 },
  { div: 30, input: 23 },
  { div: 31, input: 23 },
  { div: 32, input: 23 },
  { div: 33, input: 22 },
  { div: 33, input: 23 },
  { div: 33, input: 24 },
  { div: 34, input: 20 },
  { div: 34, input: 21 },
  { div: 34, input: 23 },
  { div: 34, input: 25 },
  { div: 34, input: 26 },
  { div: 35, input: 23 },
  { div: 36, input: 23 },
  { div: 37, input: 23 },
  { div: 38, input: 23 },
  { div: 39, input: 22 },
  { div: 39, input: 24 },
  { div: 40, input: 21 },
  { div: 40, input: 25 },
];

for (let i = 0; i < position.length; i++) {
  document.querySelector(
    `[data-div='${position[i].div}'] [data-input='${position[i].input}']`
  ).checked = true;
}

// sound effect
const inputs = document.querySelectorAll("input");
const sound = document.getElementById("sound");

inputs.forEach((input) => input.addEventListener("change", play));

function play(e) {
  if (e.target.checked) {
    sound.currentTime = 0;
    sound.play();
  }
}
