function inverterString(str) {
    let stringInvertida = "";

    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    return stringInvertida;
}
let minhastring = 'willian aquino faria junior'
let stringInvertida = inverterString(minhastring);

console.log(stringInvertida)
