module.exports = ({ env }) => ({
  url: 'https://houston-api.azurewebsites.net',
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
  },
});