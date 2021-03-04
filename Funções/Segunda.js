var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let filmes = [];
for(let linha of notas) {
    let [id, nota, numVotos] = linha.split("\t");
    let filme = new Filme(id, null, Number(nota), Number(numVotos));
    filmes.push(filme);
}
for (let f of filmes){
  if (f.numVotos > 5000){
    for (let f = 0; f < 10; f++){
      console.log(obj[f], f.titulo);
  }
}
}