let somme = 0
for (let i = 2; i < process.argv.length; i++) {
    let arg = process.argv[i];
    somme += parseFloat(arg);

}
    console.log(somme)