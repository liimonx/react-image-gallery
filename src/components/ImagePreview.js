import React from 'react'

const ImagePreview = ({ image, callback }) => {

    function handleClick(e) {
        e.preventDefault();
        callback(0)
      }

    return (
       <React.Fragment>
           <div className="image-preview" onClick={handleClick}>
               <div className="image-preview__backdrop">
                   <img className="image-preview__backdrop-image" src={image.webformatURL} alt="backdrop"/>
                   <div className="image-preview__backdrop-overlay"></div>
               </div>
               <div className="image-preview__container">
                   <img className="image-preview__image"src={image.largeImageURL} alt=""/>
               </div>
           </div>
       </React.Fragment>
    )
}

export default ImagePreview
