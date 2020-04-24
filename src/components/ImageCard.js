import React from 'react'

const ImageCard = ({ image }) => {
    let imageCol = 6

    const displayWidht = window.innerWidth

    if (displayWidht < 768) {
        imageCol = 3
    }

    let  cardWidth =  displayWidht / imageCol

    if (image.imageHeight > image.imageWidth) {
        cardWidth = displayWidht / (imageCol * 2)
    }


    const imageCardStyle = {
        width: cardWidth,
        marginBottom: 20
    }

    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
      }
    
    return (
       <React.Fragment>
           <div className="image-card" style={imageCardStyle}>
               <div className="image-card__body" onClick={handleClick}>
                   <div className="image-card__images">
                       <img src={image.webformatURL} className='previewURL' alt=""/>
                   </div>
               </div>
           </div>
       </React.Fragment>
    ) 
}



export default ImageCard
