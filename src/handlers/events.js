const fs = require("fs");
const path = require('path');
const rootDir = path.dirname(require.main.filename);

module.exports = (client) => {
  const eventsFile = []

  function readEvents(dir) {
    const __dirname = rootDir;
    const files = fs.readdirSync(path.join(__dirname, dir));
    for (const file of files) {
      const stat = fs.lstatSync(path.join(__dirname, dir, file));
      if (stat.isDirectory()) {
          readEvents(path.join(dir, file));
      }
      else {
          const fileDir = dir.replace('\\', '/');
          eventsFile.push(fileDir + '/' + file);
      }
  }
}
  readEvents('events')
  for(const file of eventsFile) {
      const event = require(`../${file}`);
      console.log(event)
      if(!event.name) {
        throw new TypeError(`${file} não é um evento válido.`)
      }
    client.on(event.name, event.execute.bind(null, client));
    //delete require.cache[require.resolve(`../events/${file}`)];
  };
};
