declare module '*.module.css'
declare module '*.module.scss'

declare module '*.jpg'
declare module '*.png'
declare module '*.jpeg'
declare module '*.gif'

declare module '*.svg'
declare module '*.svg?url'
declare module '*.svg?base64'
interface Window {
  // biome-ignore lint/suspicious/noExplicitAny:
  __PRELOADED_STATE__: any
}

declare const NO_SSR: boolean

declare var module: {
    hot?: {
      accept(path?: string, callback?: () => void): void;
      dispose(callback: () => void): void;
    };
  };