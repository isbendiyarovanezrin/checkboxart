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

document.querySelector("[data-div='1'] [data-input='14']").checked = true;
document.querySelector("[data-div='1'] [data-input='32']").checked = true;
document.querySelector("[data-div='2'] [data-input='13']").checked = true;
document.querySelector("[data-div='2'] [data-input='33']").checked = true;
document.querySelector("[data-div='3'] [data-input='12']").checked = true;
document.querySelector("[data-div='3'] [data-input='34']").checked = true;
document.querySelector("[data-div='4'] [data-input='11']").checked = true;
document.querySelector("[data-div='4'] [data-input='35']").checked = true;
document.querySelector("[data-div='5'] [data-input='10']").checked = true;
document.querySelector("[data-div='5'] [data-input='36']").checked = true;
document.querySelector("[data-div='6'] [data-input='10']").checked = true;
document.querySelector("[data-div='6'] [data-input='36']").checked = true;
document.querySelector("[data-div='7'] [data-input='10']").checked = true;
document.querySelector("[data-div='7'] [data-input='36']").checked = true;
document.querySelector("[data-div='8'] [data-input='10']").checked = true;
document.querySelector("[data-div='8'] [data-input='15']").checked = true;
document.querySelector("[data-div='8'] [data-input='16']").checked = true;
document.querySelector("[data-div='8'] [data-input='17']").checked = true;
document.querySelector("[data-div='8'] [data-input='18']").checked = true;
document.querySelector("[data-div='8'] [data-input='28']").checked = true;
document.querySelector("[data-div='8'] [data-input='29']").checked = true;
document.querySelector("[data-div='8'] [data-input='30']").checked = true;
document.querySelector("[data-div='8'] [data-input='31']").checked = true;
document.querySelector("[data-div='8'] [data-input='36']").checked = true;
document.querySelector("[data-div='9'] [data-input='10']").checked = true;
document.querySelector("[data-div='9'] [data-input='14']").checked = true;
document.querySelector("[data-div='9'] [data-input='16']").checked = true;
document.querySelector("[data-div='9'] [data-input='17']").checked = true;
document.querySelector("[data-div='9'] [data-input='19']").checked = true;
document.querySelector("[data-div='9'] [data-input='27']").checked = true;
document.querySelector("[data-div='9'] [data-input='29']").checked = true;
document.querySelector("[data-div='9'] [data-input='30']").checked = true;
document.querySelector("[data-div='9'] [data-input='32']").checked = true;
document.querySelector("[data-div='9'] [data-input='36']").checked = true;
document.querySelector("[data-div='9'] [data-input='37']").checked = true;
document.querySelector("[data-div='9'] [data-input='38']").checked = true;
document.querySelector("[data-div='9'] [data-input='39']").checked = true;
document.querySelector("[data-div='10'] [data-input='10']").checked = true;
document.querySelector("[data-div='10'] [data-input='14']").checked = true;
document.querySelector("[data-div='10'] [data-input='16']").checked = true;
document.querySelector("[data-div='10'] [data-input='17']").checked = true;
document.querySelector("[data-div='10'] [data-input='19']").checked = true;
document.querySelector("[data-div='10'] [data-input='27']").checked = true;
document.querySelector("[data-div='10'] [data-input='29']").checked = true;
document.querySelector("[data-div='10'] [data-input='30']").checked = true;
document.querySelector("[data-div='10'] [data-input='32']").checked = true;
document.querySelector("[data-div='10'] [data-input='36']").checked = true;
document.querySelector("[data-div='10'] [data-input='39']").checked = true;
document.querySelector("[data-div='11'] [data-input='7']").checked = true;
document.querySelector("[data-div='11'] [data-input='8']").checked = true;
document.querySelector("[data-div='11'] [data-input='9']").checked = true;
document.querySelector("[data-div='11'] [data-input='10']").checked = true;
document.querySelector("[data-div='11'] [data-input='15']").checked = true;
document.querySelector("[data-div='11'] [data-input='16']").checked = true;
document.querySelector("[data-div='11'] [data-input='17']").checked = true;
document.querySelector("[data-div='11'] [data-input='18']").checked = true;
document.querySelector("[data-div='11'] [data-input='28']").checked = true;
document.querySelector("[data-div='11'] [data-input='29']").checked = true;
document.querySelector("[data-div='11'] [data-input='30']").checked = true;
document.querySelector("[data-div='11'] [data-input='31']").checked = true;
document.querySelector("[data-div='11'] [data-input='36']").checked = true;
document.querySelector("[data-div='11'] [data-input='39']").checked = true;
document.querySelector("[data-div='12'] [data-input='7']").checked = true;
document.querySelector("[data-div='12'] [data-input='10']").checked = true;
document.querySelector("[data-div='12'] [data-input='36']").checked = true;
document.querySelector("[data-div='12'] [data-input='38']").checked = true;
document.querySelector("[data-div='13'] [data-input='7']").checked = true;
document.querySelector("[data-div='13'] [data-input='10']").checked = true;
document.querySelector("[data-div='13'] [data-input='36']").checked = true;
document.querySelector("[data-div='13'] [data-input='37']").checked = true;
document.querySelector("[data-div='14'] [data-input='8']").checked = true;
document.querySelector("[data-div='14'] [data-input='10']").checked = true;
document.querySelector("[data-div='14'] [data-input='36']").checked = true;
document.querySelector("[data-div='15'] [data-input='9']").checked = true;
document.querySelector("[data-div='15'] [data-input='10']").checked = true;
document.querySelector("[data-div='15'] [data-input='36']").checked = true;
document.querySelector("[data-div='16'] [data-input='10']").checked = true;
document.querySelector("[data-div='16'] [data-input='21']").checked = true;
document.querySelector("[data-div='16'] [data-input='25']").checked = true;
document.querySelector("[data-div='16'] [data-input='36']").checked = true;
document.querySelector("[data-div='17'] [data-input='10']").checked = true;
document.querySelector("[data-div='17'] [data-input='22']").checked = true;
document.querySelector("[data-div='17'] [data-input='23']").checked = true;
document.querySelector("[data-div='17'] [data-input='24']").checked = true;
document.querySelector("[data-div='17'] [data-input='36']").checked = true;
document.querySelector("[data-div='18'] [data-input='10']").checked = true;
document.querySelector("[data-div='18'] [data-input='36']").checked = true;
document.querySelector("[data-div='19'] [data-input='10']").checked = true;
document.querySelector("[data-div='19'] [data-input='36']").checked = true;
document.querySelector("[data-div='20'] [data-input='10']").checked = true;
document.querySelector("[data-div='20'] [data-input='36']").checked = true;
document.querySelector("[data-div='21'] [data-input='11']").checked = true;
document.querySelector("[data-div='21'] [data-input='36']").checked = true;
document.querySelector("[data-div='22'] [data-input='12']").checked = true;
document.querySelector("[data-div='22'] [data-input='19']").checked = true;
document.querySelector("[data-div='22'] [data-input='20']").checked = true;
document.querySelector("[data-div='22'] [data-input='21']").checked = true;
document.querySelector("[data-div='22'] [data-input='22']").checked = true;
document.querySelector("[data-div='22'] [data-input='23']").checked = true;
document.querySelector("[data-div='22'] [data-input='24']").checked = true;
document.querySelector("[data-div='22'] [data-input='25']").checked = true;
document.querySelector("[data-div='22'] [data-input='26']").checked = true;
document.querySelector("[data-div='22'] [data-input='27']").checked = true;
document.querySelector("[data-div='22'] [data-input='28']").checked = true;
document.querySelector("[data-div='22'] [data-input='35']").checked = true;
document.querySelector("[data-div='23'] [data-input='13']").checked = true;
document.querySelector("[data-div='23'] [data-input='19']").checked = true;
document.querySelector("[data-div='23'] [data-input='20']").checked = true;
document.querySelector("[data-div='23'] [data-input='21']").checked = true;
document.querySelector("[data-div='23'] [data-input='22']").checked = true;
document.querySelector("[data-div='23'] [data-input='23']").checked = true;
document.querySelector("[data-div='23'] [data-input='24']").checked = true;
document.querySelector("[data-div='23'] [data-input='25']").checked = true;
document.querySelector("[data-div='23'] [data-input='26']").checked = true;
document.querySelector("[data-div='23'] [data-input='27']").checked = true;
document.querySelector("[data-div='23'] [data-input='28']").checked = true;
document.querySelector("[data-div='23'] [data-input='34']").checked = true;
document.querySelector("[data-div='24'] [data-input='14']").checked = true;
document.querySelector("[data-div='24'] [data-input='20']").checked = true;
document.querySelector("[data-div='24'] [data-input='21']").checked = true;
document.querySelector("[data-div='24'] [data-input='22']").checked = true;
document.querySelector("[data-div='24'] [data-input='23']").checked = true;
document.querySelector("[data-div='24'] [data-input='24']").checked = true;
document.querySelector("[data-div='24'] [data-input='25']").checked = true;
document.querySelector("[data-div='24'] [data-input='26']").checked = true;
document.querySelector("[data-div='24'] [data-input='27']").checked = true;
document.querySelector("[data-div='24'] [data-input='33']").checked = true;
document.querySelector("[data-div='25'] [data-input='15']").checked = true;
document.querySelector("[data-div='25'] [data-input='21']").checked = true;
document.querySelector("[data-div='25'] [data-input='22']").checked = true;
document.querySelector("[data-div='25'] [data-input='23']").checked = true;
document.querySelector("[data-div='25'] [data-input='24']").checked = true;
document.querySelector("[data-div='25'] [data-input='25']").checked = true;
document.querySelector("[data-div='25'] [data-input='26']").checked = true;
document.querySelector("[data-div='25'] [data-input='24']").checked = true;
document.querySelector("[data-div='25'] [data-input='32']").checked = true;
document.querySelector("[data-div='26'] [data-input='16']").checked = true;
document.querySelector("[data-div='26'] [data-input='31']").checked = true;
document.querySelector("[data-div='27'] [data-input='17']").checked = true;
document.querySelector("[data-div='27'] [data-input='30']").checked = true;
document.querySelector("[data-div='28'] [data-input='18']").checked = true;
document.querySelector("[data-div='28'] [data-input='29']").checked = true;
document.querySelector("[data-div='29'] [data-input='19']").checked = true;
document.querySelector("[data-div='29'] [data-input='20']").checked = true;
document.querySelector("[data-div='29'] [data-input='21']").checked = true;
document.querySelector("[data-div='29'] [data-input='22']").checked = true;
document.querySelector("[data-div='29'] [data-input='23']").checked = true;
document.querySelector("[data-div='29'] [data-input='24']").checked = true;
document.querySelector("[data-div='29'] [data-input='25']").checked = true;
document.querySelector("[data-div='29'] [data-input='26']").checked = true;
document.querySelector("[data-div='29'] [data-input='27']").checked = true;
document.querySelector("[data-div='29'] [data-input='28']").checked = true;
document.querySelector("[data-div='30'] [data-input='23']").checked = true;
document.querySelector("[data-div='31'] [data-input='23']").checked = true;
document.querySelector("[data-div='32'] [data-input='23']").checked = true;
document.querySelector("[data-div='33'] [data-input='22']").checked = true;
document.querySelector("[data-div='33'] [data-input='23']").checked = true;
document.querySelector("[data-div='33'] [data-input='24']").checked = true;
document.querySelector("[data-div='34'] [data-input='20']").checked = true;
document.querySelector("[data-div='34'] [data-input='21']").checked = true;
document.querySelector("[data-div='34'] [data-input='23']").checked = true;
document.querySelector("[data-div='34'] [data-input='25']").checked = true;
document.querySelector("[data-div='34'] [data-input='26']").checked = true;
document.querySelector("[data-div='35'] [data-input='23']").checked = true;
document.querySelector("[data-div='36'] [data-input='23']").checked = true;
document.querySelector("[data-div='37'] [data-input='23']").checked = true;
document.querySelector("[data-div='38'] [data-input='23']").checked = true;
document.querySelector("[data-div='39'] [data-input='22']").checked = true;
document.querySelector("[data-div='39'] [data-input='24']").checked = true;
document.querySelector("[data-div='40'] [data-input='21']").checked = true;
document.querySelector("[data-div='40'] [data-input='25']").checked = true;
