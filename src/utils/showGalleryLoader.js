import Loader from "react-loader-spinner";

function showGalleryLoader() {
  return (
    <Loader type="Rings" color="#00BFFF" height={80} width={80} timeout={0} />
  );
}

export default showGalleryLoader;
