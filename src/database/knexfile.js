const path = require('path');

module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: './src/db.sqlite'
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: path.resolve(__dirname, 'migrations')
      },
    }
  
  };