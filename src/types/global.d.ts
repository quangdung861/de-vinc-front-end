declare global {
    interface R {
      loading: () => void;
    }
  }

declare global {
    interface Window {
        R: typeof R
    }
}

declare global {
  interface String {
      logString(...replacements: string[]) : string;
  }
}

export {}; 