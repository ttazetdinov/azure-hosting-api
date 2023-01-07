module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: 'postgres',
          host: env('DBHOST'),
          port: env.int('DBPORT'),
          database: env('DBNAME'),
          username: env('DBUSER'),
          password: env('DBPASS'),
          ssl: env.bool('DATABASE_SSL'),
        },
        options: {}
      },
    },
  });