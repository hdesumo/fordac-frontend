// types/global.d.ts
export {};

declare global {
  interface Window {
    grecaptcha: {
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
      ready: (cb: () => void) => void;
    };
  }

  const grecaptcha: {
    execute: (
      siteKey: string,
      options: { action: string }
    ) => Promise<string>;
    ready: (cb: () => void) => void;
  };
}
