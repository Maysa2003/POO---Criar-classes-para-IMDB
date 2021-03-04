var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const fs = require ('fs');
const readline = require('readline');

let inputNomes = fs.readFileSync("./name/data.tsv", "utf8");
let nomes = inputNomes.split("\n");
nomes.shift();

}
async function lerAtores() {
    const linhas = readline.createInterface({
        input: fs.createReadStream('./dados/principals.tsv')
    });
    for await(let linha of linhas) {
        let [tconst,ordering ,nconst, category, job, characters] = linha.split("\t");
        if(filmes[tconst]) {
            filmes[tconst].elenco = filmes[tconst].elenco || [];
            filmes[tconst].elenco.push ( 
                {
                    idPessoa: nconst, 
                    categoria: category,
                    papel: job,
                    personagens: characters.split(",") 
                }
            );
        } 
        let filmes = {};
        let atores = Atores.filter ((elemento) => elemento.Filme);
        for (let i = 0; let i < filmes.length; i++){
          filmes.push([i]);
          
        }
    }  
}
