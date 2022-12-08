/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASEURL: string;
  readonly VITE_TIMEOUT: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
