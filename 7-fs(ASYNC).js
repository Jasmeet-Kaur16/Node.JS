const { readFile, writeFile } = require('fs');
console.log("hello");
//CALLBACK HELL
readFile('./3_module/6-text.txt','utf8', (err,result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./3_module/text.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        console.log(first, second); 
        writeFile('./3_module/newFile.txt', `Here is the result.\n First: ${first}\n Second: ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            readFile('./3_module/newFile.txt', 'utf8', (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(result);
            });
        });
    })
})

console.log("Bye");