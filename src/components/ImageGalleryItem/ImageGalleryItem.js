import {
  StyledImageGalleryItem,
  StyledImageGalleryItemImage,
} from "./StyledImageGalleryItem";

const ImageGalleryItem = ({ imagesData }) => {
  return (
    <StyledImageGalleryItem>
      <StyledImageGalleryItemImage
        src={imagesData.webformatURL}
        alt={imagesData.tags}
      />
    </StyledImageGalleryItem>
  );
};

export default ImageGalleryItem;
