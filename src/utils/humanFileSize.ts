import * as R from "ramda";

const humanFileSize = (sizeBytes: number): string => {
  const exp = R.divide(Math.log(sizeBytes), Math.log(1024)) | 0;
  const value = R.divide(sizeBytes, 1024 ** exp).toFixed(2);
  const unit = (exp === 0 ? 'Bytes' : ('KMGTPEZY'[exp - 1]) + 'B');

  return `${value} ${unit}`;
};

export default humanFileSize;
