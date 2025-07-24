declare module '*.png' {
  const content: any;
  export default content;
}

declare module '@env' {
  export const API_BASE_URL: string;
}