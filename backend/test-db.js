const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgresql://neondb_owner:6TzvlsBDEIj0@ep-wild-resonance-a5hb3lfc.us-east-2.aws.neon.tech/neondb?sslmode=require',
  ssl: {
    rejectUnauthorized: false, // Disable SSL strict validation for Neon
  },
});

client.connect()
  .then(() => console.log('Connected to Neon successfully!'))
  .catch(err => console.error('Connection error:', err.stack))
  .finally(() => client.end());
