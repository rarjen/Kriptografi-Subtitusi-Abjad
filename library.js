var spaces = []; // menyimpan index spasi
var abjad = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var newAbjad = [];

const encrypt = (message) => {
  // algoritma merancang pesan
  const result = message.split(" ").join("");
  const resultArray = result.split("");
  const char = [];

  for (let i = 0; i < abjad.length; i++) {
    for (let j = 0; j < resultArray.length; j++) {
      if (abjad[i] === resultArray[j]) {
        if (!char.includes(abjad[i])) {
          char.push(abjad[i]);
        }
      }
    }
  }

  // algoritma menambahkan abjad
  let newChar = char.concat(abjad);
  newAbjad = newChar.filter((value, pos) => {
    return newChar.indexOf(value) == pos;
  });

  for (let i = 0; i < message.length; i++) {
    if (message[i] == " ") {
      spaces.push(i);
    }
  }

  var indexArray = []; // menyimpan index abjad == newAbjad

  // menyimpan index pesan
  for (let i = 0; i < resultArray.length; i++) {
    for (let j = 0; j < abjad.length; j++) {
      if (resultArray[i] === abjad[j]) {
        indexArray.push(j);
      }
    }
  }

  const encryptArray = [];
  for (let i = 0; i < indexArray.length; i++) {
    newAbjad.forEach((newAbjad, indexNewAbjad) => {
      if (indexArray[i] === indexNewAbjad) {
        encryptArray.push(newAbjad);
      }
    });
  }

  const encryptString = encryptArray.join("");

  return encryptString;
};

const decrypt = (message) => {
  const resultArray = message.split("");

  let indexArray = [];
  for (let i = 0; i < resultArray.length; i++) {
    for (let j = 0; j < newAbjad.length; j++) {
      if (resultArray[i] === newAbjad[j]) {
        indexArray.push(j);
      }
    }
  }

  let decryptArray = [];
  for (let i = 0; i < indexArray.length; i++) {
    abjad.forEach((abjad, indexNewAbjad) => {
      if (indexArray[i] === indexNewAbjad) {
        decryptArray.push(abjad);
      }
    });
  }

  for (let j = 0; j < spaces.length; j++) {
    decryptArray.splice(spaces[j], 0, " ");
  }

  const decryptString = decryptArray.join("");
  return decryptString;
};

module.exports = { encrypt, decrypt };
