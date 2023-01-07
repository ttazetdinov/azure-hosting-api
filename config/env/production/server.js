module.exports = ({ env }) => ({
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 1337),
    url: "https://strapi-on-azure.azurewebsites.net",
    admin: {
      url: "https://witty-sky-061465203.azurestaticapps.net",
      serveAdminPanel: false,
    },
  });