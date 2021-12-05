const fs = require('fs');
const path = require('path');
const rootDir = path.dirname(require.main.filename);


module.exports = (client, Discord) => {
    const fileArray = [];

    function readCommands(dir) {
        const __dirname = rootDir;
        const files = fs.readdirSync(path.join(__dirname, dir));
        for (const file of files) {
            const stat = fs.lstatSync(path.join(__dirname, dir, file));
            if (stat.isDirectory()) {
                readCommands(path.join(dir, file));
            }
            else {
                const fileDir = dir.replace('\\', '/');
                fileArray.push(fileDir + '/' + file);
            }
        }
    }
    readCommands('commands');
    for(const file of fileArray) {
        const command = require(`../${file}`);
        if(command.name + "a") {
            client.commands.set(command.name, command);
        }       
    }
};
