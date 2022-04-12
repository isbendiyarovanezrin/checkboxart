"use strict";

const main = document.querySelector("main");
const desktop = window.matchMedia("(min-width: 650px)");
const tablet = window.matchMedia("(min-width: 500px) and (max-width: 650px)");
const mobile1 = window.matchMedia("(min-width: 350px) and (max-width: 500px)");
const mobile2 = window.matchMedia("(max-width: 350px)");

if (desktop.matches) {
  for (let i = 0; i < 40; i++) {
    const div = document.createElement("div");
    main.appendChild(div);

    for (let j = 0; j < 45; j++) {
      const input = document.createElement("input");
      input.type = "checkbox";
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
