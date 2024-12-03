// require("dotenv").config(); // Load environment variables

// module.exports = ({ env }) => ({
//   connection: {
//     client: env("DATABASE_CLIENT", "postgres"),
//     connection: {
//       connectionString: env("DATABASE_URL"),
//       ssl: env.bool("DATABASE_SSL", true)
//         ? {
//             rejectUnauthorized: env.bool("DATABASE_SSL_REJECT_UNAUTHORIZED", false), // Recommended for Neon
//           }
//         : false,
//     },
//     // pool: {
//     //   min: env.int("DATABASE_POOL_MIN", 2),
//     //   max: env.int("DATABASE_POOL_MAX", 10),
//     // },
//     acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
//   },
// });

    // strapi-api/config/database.js
    module.exports = ({ env }) => ({
      connection: {
        client: 'postgres',
        connection: {
          host: env('DATABASE_HOST', 'localhost'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'demo'),
          user: env('DATABASE_USERNAME', 'postgres'),
          password: env('DATABASE_PASSWORD', 'ayan'),
          schema: env('DATABASE_SCHEMA', 'public'), // Not required
          ssl: env.bool('DATABASE_SSL', false) && {
            rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
          },
        },
        debug: false,
      },
    });
    
// module.exports = ({ env }) => {
//   const client = env("DATABASE_CLIENT", "postgres");
//   const connections = {
//     postgres: {
//       connection: {
//         connectionString: env("DATABASE_URL"),
//         host: env("DATABASE_HOST", "localhost"),
//         port: env.int("DATABASE_PORT", 5432),
//         database: env("DATABASE_NAME", "strapi"),
//         user: env("DATABASE_USERNAME", "strapi"),
//         password: env("DATABASE_PASSWORD", "strapi"),
//         ssl: env.bool("DATABASE_SSL", true) && {
//           key: env("DATABASE_SSL_KEY", undefined),
//           cert: env("DATABASE_SSL_CERT", undefined),
//           ca: env("DATABASE_SSL_CA", undefined),
//           capath: env("DATABASE_SSL_CAPATH", undefined),
//           cipher: env("DATABASE_SSL_CIPHER", undefined),
//           rejectUnauthorized: env.bool(
//             "DATABASE_SSL_REJECT_UNAUTHORIZED",
//             true
//           ),
//         },
//         schema: env("DATABASE_SCHEMA", "public"),
//       },
//       pool: {
//         min: env.int("DATABASE_POOL_MIN", 2),
//         max: env.int("DATABASE_POOL_MAX", 10),
//       },
//     },
//   };

//   return {
//     connection: {
//       client,
//       ...connections[client],
//       acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
//     },
//   };
// };
