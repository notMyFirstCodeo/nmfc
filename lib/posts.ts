import { join } from "path";
import fs from "fs";

const getDirectory = (path: string) => join(process.cwd(), path);

const getFileNames = (dir: string): string[] => {
  return fs.readdir(dir);
};

const getPostNames = () => {
  return getFileNames(getDirectory("/content/posts"));
};

export { getPostNames };
