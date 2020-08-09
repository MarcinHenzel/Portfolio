import { ImgObj } from './ImgObj';

export interface Project {
  title: string;
  redirectLive: string;
  redirectGit: string;
  description: Line[];
  techs: string[];
  images: ImgObj[];
}
interface Line {
  preBold?: string;
  sentence?: string;
}
