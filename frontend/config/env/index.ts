const { VITE_BASEURL, VITE_TIMEOUT } = import.meta.env;

interface Env {
  baseURL: string;
  timeout: number;
}

/**
 * Contiene las variables de entorno del sistema
 */
const env: Env = {
  baseURL: VITE_BASEURL,
  timeout: VITE_TIMEOUT,
};

export default env;
