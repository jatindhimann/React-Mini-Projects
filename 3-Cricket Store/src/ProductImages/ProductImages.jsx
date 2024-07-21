import React, { useState } from 'react'
import images from '../Images'

const ProductImages = () => {
  const [selectedImage, setSelectedImage] = useState(images[0])

  const handleImageClick = (img) => {
    setSelectedImage(img);
  }
  return (
    <div className="product-images-section">
      <div className="image-options">
        {images.map((img, index) => (
          <div
            className={`img-container ${
              img === selectedImage ? 'selected' : ''
            }`}
            key={index}
            onClick={() => handleImageClick(img)}
          >
            <img src={img} alt={`Product ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="selected-image">
        <img src={selectedImage} alt="Selected Image" />
      </div>
    </div>
  )
}

export default ProductImages
