const getCroppedImageURL = (url: string) => {
  if (!url) return "";
  const target = "media/";
  const idx = url.indexOf(target) + target.length;
  return url.substring(0, idx) + "crop/600/400/" + url.substring(idx);
};
export default getCroppedImageURL;
