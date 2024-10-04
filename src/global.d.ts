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

declare module "@/assets/imgs/assetsManager" {
  const assets: { [key: string]: string };
  export default assets;
}
