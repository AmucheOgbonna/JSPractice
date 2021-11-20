const writeFile = require('fs');
for(let num =0; num < 10000; num++){
    writeFile.writeFileSync('./content/big.txt', `Hello World ${num}\n.`,
    {flag:'a'}    
)
}