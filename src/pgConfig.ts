import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: "TestOrder",
    password: "vd333",
    port: 5432,
});

export default pool;