const readline = require('readline');

function mostLongSubstringAlg(string) {
    let mostLongSubstr = ""
    let substr = ""
    let processedChars = []

    for (char of string) {
        if (!processedChars.includes(char)) {
            substr += char
            processedChars.push(char)
        } else {
            substr = char
            processedChars = [char]
        }

        if (mostLongSubstr.length < substr.length) {
            mostLongSubstr = substr
        }
    }

    console.log({ mostLongSubstr })
    console.log("Saida: ", mostLongSubstr.length)
}

function main() {
    const reader = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    reader.question("Entrada: ", function(answer) {
        mostLongSubstringAlg(answer)
        reader.close()
    });
}

main()