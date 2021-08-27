import {
  StyledImageGalleryItem,
  StyledImageGalleryItemImage,
} from "./StyledImageGalleryItem";

const ImageGalleryItem = ({ imagesData, onClick }) => {
  return (
    <StyledImageGalleryItem>
      <StyledImageGalleryItemImage
        src={imagesData.webformatURL}
        alt={imagesData.tags}
        onClick={onClick}
      />
    </StyledImageGalleryItem>
  );
};

export default ImageGalleryItem;
