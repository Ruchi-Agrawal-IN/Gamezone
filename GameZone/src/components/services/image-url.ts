import noImage from "../../assets/no-image-placeholder-6f3882e0.webp";
const getCroppedImageURL = (url: string) => {
  if (!url) return noImage;
  const target = "media/";
  const idx = url.indexOf(target) + target.length;
  return url.substring(0, idx) + "crop/600/400/" + url.substring(idx);
};
export default getCroppedImageURL;
