const { readdirSync } = require("fs");
module.exports = (client) => {
  const eventFiles = readdirSync("./src/events/").filter((file) => file.endsWith(".js")
  );

  eventFiles.forEach((file) => {
    const event = require(`../events/${file}`);
    if (!event.name){
      throw new TypeError(
        `[ERROR]: (${file})`
      );
    }
    if (!event.name) { 
      throw new TypeError(`[ERROR]: (${file})`);
    }
    client.on(event.name, event.execute.bind(null, client));

   delete require.cache[require.resolve(`../events/${file}`)];
  });
};