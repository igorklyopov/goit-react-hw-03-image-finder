import { Component } from "react";
import StyledImageGallery from "./StyledImageGallery";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Modal from "../Modal/Modal";

class ImageGallery extends Component {
  state = {
    showModal: false,
    activeImageIndex: 0,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  setActiveImageIndex = (index) => {
    this.setState({ activeImageIndex: index });
    console.log(this.state.activeImageIndex);
  };

  showLightBox = (index) => {
    this.setActiveImageIndex(index);
    this.toggleModal();
  };

  render() {
    // console.log(this.props.images[0].largeImageURL);
    console.log(this.props.images[this.state.activeImageIndex].largeImageURL);
    return (
      <>
        <StyledImageGallery>
          {this.props.images.map((image, index) => (
            <ImageGalleryItem
              key={image.id}
              imagesData={image}
              onClick={() => this.showLightBox(index)}
            />
          ))}
        </StyledImageGallery>
        {this.state.showModal && (
          <Modal onModalClose={this.toggleModal}>
            <img
              src={this.props.images[this.state.activeImageIndex].largeImageURL}
              alt={this.props.images[this.state.activeImageIndex].tags}
            />
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGallery;
