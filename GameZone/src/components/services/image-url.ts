const getCroppedImageURL = (url: string) => {
  const idx = url.indexOf("media/") + "media/".length;
  return url.substring(0, idx) + "crop/600/400/" + url.substring(idx);
};
export default getCroppedImageURL;
