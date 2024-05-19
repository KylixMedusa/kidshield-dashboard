export enum ImageFilterMode {
  BLUR = "blur",
  HIDE = "hide",
  GRAYSCALE = "grayscale",
}

export interface IUser {
  _id: string;
  name: string;
  email: string;

  isExtensionEnabled: boolean;
  filterStrictness: number;
  imageFilterMode: ImageFilterMode;
}
