const readline = require('readline');
const consola = require('consola');

function words_check() {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Please insert a five words sentence ', (answer) => {
        let wordCount = answer.split(' ');

        if (wordCount.length >= 5) {
            console.log(`La frase è abbastanza lunga: ${answer}`);
            rl.close();

        } else {
            consola.error('La frase contiene meno di 5 parole');
            words_check();
        }
    });
}
words_check();