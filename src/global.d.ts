declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.mp4" {
  const src: string;
  export default src;
}

declare module "@/assets/imgs/assetsManager" {
  const assets: { [key: string]: string };
  export default assets;
}

declare module "@/data/config/colors" {
  export const colors: {
    primary: {
      lighter: string;
      light: string;
      main: string;
      dark: string;
      darker: string;
    };
    secondary: {
      lighter: string;
      light: string;
      main: string;
      dark: string;
      darker: string;
    };
  };
}
