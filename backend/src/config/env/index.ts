interface DBEnv {
    readonly user: string;
    readonly password: string;
    readonly database: string;
    readonly host: string;
    readonly port: string;
    readonly max: string;
    readonly idleTimeoutMillis: string;
    readonly client: string;
}

interface Session {
    readonly session_secret: string;
    readonly token_secret: string;
}

const db: DBEnv = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    max: process.env.DB_MAX_CONNECTIONS,
    idleTimeoutMillis: process.env.DB_IDLE_TIMEOUT,
    client: process.env.DB_CLIENT
}

const session: Session = {
    session_secret: process.env.SESSION_SECRET,
    token_secret: process.env.TOKEN_SECRET
}

export default { db, session }