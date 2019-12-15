import * as R from "ramda";

const humanFileSize = (sizeKB: string): string => {
  const fileSize = parseInt(sizeKB, 10);
  const exp = R.divide(Math.log(fileSize), Math.log(512)) | 0;
  const value = R.divide(fileSize, 512 ** exp).toFixed(2);
  const unit = 'KMGTPEZY'[exp] + 'B';

  return `${value} ${unit}`;
};

export default humanFileSize;
