function generatorPassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "1234567890";
    const symbols = "^$*ù^!:;,§/.?£µ%¨[{#~&^@]}";

    let allowedChars = "";
    let password = "";

    allowedChars+=includeLowercase ? lowercaseChars : "";
    allowedChars+=includeUppercase ? uppercaseChars : "";
    allowedChars+=includeNumbers ? numbers : "";
    allowedChars+=includeSymbols ? symbols : "";

    for(let i=0;i<length;i++){
        const random = Math.floor(Math.random()*allowedChars.length);
        password += allowedChars[random];
    }

    return password;
}

const passwordLength = 1200;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatorPassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
console.log(`generated password: ${password}`);
