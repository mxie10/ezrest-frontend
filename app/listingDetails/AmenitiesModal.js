import React from 'react'

const AmenitiesModal = (props) => {

    const {showAmenities,features,amenities,safetyFeatures,toggleShowAmenities,iconsMap} = props;

    return showAmenities ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="w-1/3 h-auto p-6 bg-white rounded-lg">
                <h1 className='text-2xl font-semibold'>What this place offer</h1>
                <div className='flex flex-col justify-between'>
                    <h1 className='mt-2 mb-4 text-xl font-semibold'>Features</h1>
                    <div className="flex items-center mb-4">
                        <div className="flex flex-col items-start">
                            {features.slice(0, Math.ceil(features.length / 2)).map(feature => {
                                const icon = iconsMap.find(icon => icon.name === feature);
                                return (
                                    <div key={feature} className="flex items-center mr-4">
                                        {icon && icon.icon}
                                        <span className="ml-2">{feature}</span>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex flex-col items-start w-1/2 ml-auto">
                            {features.slice(Math.ceil(features.length / 2)).map(feature => {
                                const icon = iconsMap.find(icon => icon.name === feature);
                                return (
                                    <div key={feature} className="flex items-center mr-4">
                                        {icon && icon.icon}
                                        <span className="ml-2">{feature}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <h1 className='mb-4 text-xl font-semibold'>Amenities</h1>
                    <div className="flex items-center mb-4">
                        <div className="flex flex-col items-start">
                            {amenities.slice(0, Math.ceil(amenities.length / 2)).map(amenity => {
                                const icon = iconsMap.find(icon => icon.name === amenity);
                                return (
                                    <div key={amenity} className="flex items-center mr-4">
                                        {icon && icon.icon}
                                        <span className="ml-2">{amenity}</span>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex flex-col items-start w-1/2 ml-auto">
                            {amenities.slice(Math.ceil(amenities.length / 2)).map(amenity => {
                                const icon = iconsMap.find(icon => icon.name === amenity);
                                return (
                                    <div key={amenity} className="flex items-center mr-4">
                                        {icon && icon.icon}
                                        <span className="ml-2">{amenity}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <h1 className='mb-4 text-xl font-semibold'>Safety</h1>
                    <div className="flex items-center mb-4">
                        <div className="flex flex-col items-start">
                            {safetyFeatures.slice(0, Math.ceil(safetyFeatures.length / 2)).map(safety => {
                                const icon = iconsMap.find(icon => icon.name === safety);
                                return (
                                    <div key={safety} className="flex items-center mr-4">
                                        {icon && icon.icon}
                                        <span className="ml-2">{safety}</span>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex flex-col items-start w-1/2 ml-auto">
                            {safetyFeatures.slice(Math.ceil(safetyFeatures.length / 2)).map(safety => {
                                const icon = iconsMap.find(icon => icon.name === safety);
                                return (
                                    <div key={safety} className="flex items-center mr-4">
                                        {icon && icon.icon}
                                        <span className="ml-2">{safety}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={toggleShowAmenities} className="absolute text-white underline cursor-pointer top-4 right-4">Close X</button>
        </div>
    ) : null
}

export default AmenitiesModal;
