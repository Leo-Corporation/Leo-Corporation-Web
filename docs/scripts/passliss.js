function generatePassword(length) {
  let chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890;:!/§ù*$%µ£)=+*-&é'(-è_ç<>?^¨";
  let pass = "";
  for (let x = 0; x < length; x++) {
    let i = Math.floor(Math.random() * chars.length);
    pass += chars.charAt(i);
  }
  return pass;
}

// Random number function
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let specialChars = [
  ";",
  ":",
  "!",
  "/",
  "§",
  "ù",
  "*",
  "$",
  "%",
  "µ",
  "£",
  ")",
  "=",
  "+",
  "*",
  "-",
  "&",
  "é",
  "'",
  "(",
  "-",
  "è",
  "_",
  "ç",
  "<",
  ">",
  "?",
  "^",
  "¨",
];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let passwordTxt = document.querySelector("#passwordTxt");
let passwordStrength = document.querySelector("#pxrStrengthTxt");
(function (delay, callback) {
  var loop = function () {
    callback();
    setTimeout(loop, delay);
  };
  loop();
})(300, function () {
  passwordTxt.innerHTML = generatePassword(randomNumber(13, 20));
});

function colorSyntaxPassword(password) {
  let chars = [];
  passwordStrength.innerHTML = "";

  for (let i = 0; i < password.length; i++) {
    // Check if char is upper case
    if (
      password[i].toUpperCase() === password[i] &&
      !specialChars.includes(password[i]) &&
      !numbers.includes(password[i])
    ) {
      chars.push("<span class='uppercase-red'>" + password[i] + "</span>");
    }
    // Check if char is lower case
    else if (
      password[i].toLowerCase() === password[i] &&
      !specialChars.includes(password[i]) &&
      !numbers.includes(password[i])
    ) {
      chars.push("<span class='lowercase-blue'>" + password[i] + "</span>");
    }
    // Check if char is number
    else if (numbers.includes(password[i])) {
      chars.push("<span class='number-green'>" + password[i] + "</span>");
    }
    // Check if char is contained in specialChars
    else if (specialChars.includes(password[i])) {
      chars.push("<span class='special-purple'>" + password[i] + "</span>");
    }
  }

  // Display password
  for (let i = 0; i < chars.length; i++) {
    passwordStrength.innerHTML += chars[i];
  }

  // Show stats
  let uppercaseTxt = document.getElementById("uppercaseTxt");
  let lowercaseTxt = document.getElementById("lowercaseTxt");
  let numberTxt = document.getElementById("numbersTxt");
  let specialTxt = document.getElementById("specialCharsTxt");
  let lengthTxt = document.getElementById("lengthTxt");

  let uC = 0;
  let lC = 0;
  let n = 0;
  let sC = 0;

  for (let i = 0; i < password.length; i++) {
    // Check if char is upper case
    if (
      password[i].toUpperCase() === password[i] &&
      !specialChars.includes(password[i]) &&
      !numbers.includes(password[i])
    ) {
      uC++;
    }
    // Check if char is lower case
    else if (
      password[i].toLowerCase() === password[i] &&
      !specialChars.includes(password[i]) &&
      !numbers.includes(password[i])
    ) {
      lC++;
    }
    // Check if char is number
    else if (numbers.includes(password[i])) {
      n++;
    }
    // Check if char is contained in specialChars
    else if (specialChars.includes(password[i])) {
      sC++;
    }
  }

  uppercaseTxt.innerText = uC;
  lowercaseTxt.innerHTML = lC;
  numberTxt.innerHTML = n;
  specialTxt.innerHTML = sC;
  lengthTxt.innerHTML = password.length;
}

colorSyntaxPassword(generatePassword(20));

const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
// check if dark theme

const card = document.querySelector(
  darkThemeMq.matches ? ".treed-d" : ".treed"
);
const THRESHOLD = 4;
if (!motionMatchMedia.matches) {
  card.addEventListener("mousemove", handleHover);
  card.addEventListener("mouseleave", resetStyles);
}

function handleHover(e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;

  const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
  const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

  card.style.transform = `perspective(${clientWidth}px) rotateX(${-rotateY}deg) rotateY(${-rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles(e) {
  card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}
