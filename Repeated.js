const text =
  "En el barco rojo del puerto, hay muchos barco barco coches en doble fila que no se han percatado de que no van a montar en el barco!";

function mostRepeated(str) {
  str = str.toLowerCase();
  str = str.replace(/\.|\,|\!/g, "");
  const splitted = str.split(" ");
  const reduced = splitted.reduce(function (acc, el) {
    if (acc[el]) {
      acc[el]++;
    } else {
      acc[el] = 1;
    }
    return acc;
  }, {});
  return Object.entries(reduced).reduce(function (acc, el) {
    if (acc[1] > el[1]) return acc;
    else return el;
  });
}

const a = mostRepeated(text);
console.log(a);
