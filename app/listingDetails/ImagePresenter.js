import React from 'react'

const ImagePresenter = (props) => {

  const {handleImageClick,handleCloseFullScreen,selectedImage,imageSrc, propertyImg} = props;

  return (
    <>
      <div className="relative w-full">
        <div className="flex justify-center">
          <div className="flex flex-row 2xl:max-w-screen-2xl lg:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm">
            <div className="flex w-full">
            <img
                className="object-cover cursor-pointer rounded-tl-xl rounded-bl-xl"
                src={propertyImg[0]}
                onClick={() => handleImageClick(propertyImg[0])}
                alt="Image"
              />
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-row w-full mb-2">
                <img
                  className="object-cover w-1/2 h-auto mx-2 cursor-pointer"
                  src={propertyImg[1]}
                  onClick={() => handleImageClick(propertyImg[1])}
                  alt="Image"
                />
                <img
                  className="object-cover w-1/2 h-auto cursor-pointer rounded-tr-xl"
                  src={propertyImg[2]}
                  onClick={() => handleImageClick(propertyImg[2])}
                  alt="Image"
                />
              </div>
              <div className="flex flex-row">
                <img
                  className="object-cover w-1/2 h-auto mx-2 cursor-pointer"
                  src={propertyImg[3]}
                  onClick={() => handleImageClick(propertyImg[3])}
                  alt="Image"
                />
                <img
                  className="object-cover w-1/2 h-auto cursor-pointer rounded-br-xl"
                  src={propertyImg[4]}
                  onClick={() => handleImageClick(propertyImg[4])}
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" 
          onClick={handleCloseFullScreen}
        >
          <div 
            className="flex justify-center w-full max-w-screen-xl" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute text-white underline cursor-pointer top-4 right-4" 
              onClick={handleCloseFullScreen}>
                Close X
            </button>
            <img src={selectedImage} alt="Full Screen" className="max-w-full max-h-screen" />
          </div>
        </div>
      )}
    </>
  )
}

export default ImagePresenter;