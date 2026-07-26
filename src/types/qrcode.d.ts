declare module "qrcode" {
  interface QRCodeToStringOptions {
    type?: "svg" | "terminal" | "utf8";
    width?: number;
    margin?: number;
    color?: {
      dark?: string;
      light?: string;
    };
  }

  export function toString(text: string, options?: QRCodeToStringOptions): Promise<string>;
}
