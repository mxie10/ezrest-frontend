import React from 'react'

const ImagePresenter = (props) => {

  const {handleImageClick,handleCloseFullScreen,selectedImage,imageSrc } = props;

  return (
    <>
      <div className="relative w-full">
        <div className="flex justify-center">
          <div className="flex flex-row 2xl:max-w-screen-2xl lg:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm">
            <div className="flex w-full">
              <img
                className="object-cover cursor-pointer rounded-tl-xl rounded-bl-xl"
                src="https://a0.muscache.com/im/pictures/miso/Hosting-48125607/original/b9c4b62f-c00b-474f-a0cf-82b8203ad890.jpeg?im_w=1200"
                onClick={() =>
                  handleImageClick(
                    'https://a0.muscache.com/im/pictures/miso/Hosting-48125607/original/b9c4b62f-c00b-474f-a0cf-82b8203ad890.jpeg?im_w=1200'
                  )
                }
                alt="Image"
              />
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-row w-full mb-2">
                <img
                  className="object-cover w-1/2 h-auto mx-2 cursor-pointer"
                  src="https://a0.muscache.com/im/pictures/08ee4447-ee3d-4076-8d8a-337f651efacc.jpg?im_w=1440"
                  onClick={() =>
                    handleImageClick(
                      'https://a0.muscache.com/im/pictures/08ee4447-ee3d-4076-8d8a-337f651efacc.jpg?im_w=1440'
                    )
                  }
                  alt="Image"
                />
                <img
                  className="object-cover w-1/2 h-auto cursor-pointer rounded-tr-xl"
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-48125607/original/a0c9ac36-8a0e-4bfa-b7c8-c4aba4747f1e.jpeg?im_w=1440"
                  onClick={() =>
                    handleImageClick(
                      'https://a0.muscache.com/im/pictures/miso/Hosting-48125607/original/a0c9ac36-8a0e-4bfa-b7c8-c4aba4747f1e.jpeg?im_w=1440'
                    )
                  }
                  alt="Image"
                />
              </div>
              <div className="flex flex-row">
                <img
                  className="object-cover w-1/2 h-auto mx-2 cursor-pointer"
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-48125607/original/f0fbda97-8672-4b94-acad-ba0a62912547.jpeg?im_w=1440"
                  onClick={() =>
                    handleImageClick(
                      'https://a0.muscache.com/im/pictures/miso/Hosting-48125607/original/f0fbda97-8672-4b94-acad-ba0a62912547.jpeg?im_w=1440'
                    )
                  }
                  alt="Image"
                />
                <img
                  className="object-cover w-1/2 h-auto cursor-pointer rounded-br-xl"
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-48125607/original/3c190247-d564-4f3f-a169-5bc4ac1d98cc.jpeg?im_w=1440"
                  onClick={() =>
                    handleImageClick(
                      'https://a0.muscache.com/im/pictures/miso/Hosting-48125607/original/3c190247-d564-4f3f-a169-5bc4ac1d98cc.jpeg?im_w=1440'
                    )
                  }
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