declare namespace JSX {
  interface IntrinsicElements {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "dotlottie-player": any;
  }
}

declare module "*.lottie" {
  const value: string;
  export = value;
}
