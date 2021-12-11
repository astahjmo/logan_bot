const fs = require('fs');
const path = require('path');
const rootDir = path.dirname(require.main.filename);


module.exports = (client, Discord) => {
    const fileArray = [];

    function readCommands(dir) {
        const __dirname = rootDir;
        console.log(`dirname: ${dir}`)
        const files = fs.readdirSync(path.join(__dirname, dir));
        console.log(`files: ${files}`)
        for (const file of files) {
            const stat = fs.lstatSync(path.join(__dirname, dir, file));
            if (stat.isDirectory()) {
                readCommands(path.join(dir, file));
                console.log(stat.isDirectory())
            }
            else {
                const fileDir = dir.replace('\\', '/');
                console.log(fileDir)
                fileArray.push(fileDir + '/' + file);
            }
        }
    }
    readCommands('commands')
    for(const file of fileArray) {
        const command = require(`../${file}`);
        if(command.name) {
            let group = file.split("/")
            command.group = group[1]
            client.commands.set(command.name, command, command.group);
            console.log(`Carregando o comando: ${command.name}`)
        }       
    }
};
