declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'production' | 'development' | 'test';

      DB_USER: string;
      DB_PASSWORD: string;
      DB_NAME: string;
      DB_HOST: string;
      DB_PORT: string;
      DB_MAX_CONNECTIONS: string;
      DB_IDLE_TIMEOUT: string;
      DB_CLIENT: string;

      API_PORT: string;

      SESSION_SECRET: string;
      TOKEN_SECRET: string;
    }
  }
}

export {};
