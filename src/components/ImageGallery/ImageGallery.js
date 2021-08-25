import StyledImageGallery from "./StyledImageGallery";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images }) => {
  return (
    <StyledImageGallery>
      {images.map((image) => (
        <ImageGalleryItem key={image.id} imagesData={image} />
      ))}
    </StyledImageGallery>
  );
};

export default ImageGallery;
