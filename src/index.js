const args = process.argv;

let min = 1;
let max = 100;

if (args.length >= 2) {
  console.log(`Argumentos completos: ${args}`);
  const agrsSlice = args.slice(2);
  console.log(`Argumentos recibidos: ${agrsSlice}`);
  const [argMin, argMax] = agrsSlice;
  const parseMin = parseInt(argMin, 10);
  const parseMax = parseInt(argMax, 10);

  const checkIfIsANumber = !isNaN(parseMin) && !isNaN(parseMax);
  const checkMin = parseMin < parseMax;

  if (checkIfIsANumber && checkMin) {
    min = parseMin;
    max = parseMax;
  } else {
    console.log(`⚠️ Rango Inválido.`);
  }
}

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`🎲 Numero aleatorio generado entre ${min} y ${max}; ${randomNumber}`)

