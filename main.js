const { encrypt, decrypt } = require("./library");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (data) => {
      return resolve(data);
    });
  });
};

async function main() {
  try {
    let init = true;

    do {
      const choice = await input(`Masukkan Pilihan
1. Encrypt Pesan
2. Keluar
`);

      if (choice) {
        if (choice === "2") {
          rl.close();
          break;
        }

        if (choice === "1") {
          const message = await input("Masukkan Pesan: ");
          const encrypted = encrypt(message);
          console.log(`Hasil Enkripsi: ${encrypted}`);
          console.log(`Hasil Dekripsi: ${decrypt(encrypted)}`);
        }
      }

      rl.close();
    } while (init);
  } catch (error) {
    console.log(error);
  }
}

main();

// const message = "aku sayang kamu";
// console.log(message);

// const encryptMessage = encrypt(message);
// console.log(encryptMessage);

// const decryptMessage = decrypt(encryptMessage);
// console.log(decryptMessage);
