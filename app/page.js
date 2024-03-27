'use client'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineCoffeeMaker, MdPaid, MdLocalLaundryService} from "react-icons/md";
import { GiHotSurface,GiHanger,GiDesk} from "react-icons/gi";
import { BiSolidFridge, BiSolidBlanket} from "react-icons/bi";
import { FaWifi,FaParking } from "react-icons/fa";
import { FaHotjar,FaKitchenSet } from "react-icons/fa6";
import { TbAirConditioning,TbToolsKitchen3 } from "react-icons/tb";
import { PiTelevisionBold } from "react-icons/pi";
import { FaHotTub, FaWater, FaChair, FaMountain} from "react-icons/fa";
import { MdOutdoorGrill,MdOutlineFireplace, MdDinnerDining} from "react-icons/md";
import { FaWaterLadder } from "react-icons/fa6";
import { GiPoolTableCorner,GiHeatHaze} from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { WiSmoke } from "react-icons/wi";
import { Tb24Hours,TbLadder } from "react-icons/tb";
import { FaFirstAid, FaFireExtinguisher} from "react-icons/fa";
import { IoIosExit } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';

const iconsMap = [
  { name: "Wifi", icon: <FaWifi /> },
  { name: "Free Parking", icon: <FaParking /> },
  { name: "Laundry Facilities", icon: <MdLocalLaundryService /> },
  { name: "Heating", icon: <FaHotjar /> },
  { name: "AC", icon: <TbAirConditioning /> },
  { name: "Paid Parking", icon: <MdPaid /> },
  { name: "Coffee Maker", icon: <MdOutlineCoffeeMaker /> },
  { name: "Stove", icon: <GiHotSurface /> },
  { name: "Fridge", icon: <BiSolidFridge /> },
  { name: "Essential Kitchen Applicances", icon: <FaKitchenSet /> },
  { name: "Kitchen Utensils", icon: <TbToolsKitchen3 /> },
  { name: "Tvs", icon: <PiTelevisionBold /> },
  { name: "Beddings", icon: <BiSolidBlanket /> },
  { name: "Hangers", icon: <GiHanger /> },
  { name: "Work Space", icon: <GiDesk /> },
  { name: "Hot Tub", icon: <FaHotTub /> },
  { name: "BBQ Grill", icon: <MdOutdoorGrill /> },
  { name: "Patio", icon: <FaChair /> },
  { name: "Outdoor/ Backyard Dinning Area", icon: <MdDinnerDining /> },
  { name: "Lake Access", icon: <FaWater /> },
  { name: "Mountain View", icon: <FaMountain /> },
  { name: "GYM", icon: <CgGym /> },
  { name: "Pool Table", icon: <GiPoolTableCorner /> },
  { name: "Fireplace", icon: <MdOutlineFireplace /> },
  { name: "Swimming Pool", icon: <FaWaterLadder /> },
  { name: "Sauna", icon: <GiHeatHaze /> },
  { name: "Smoke Alarm", icon: <WiSmoke /> },
  { name: "24/7 Security", icon: <Tb24Hours /> },
  { name: "First Aid Kit", icon: <FaFirstAid /> },
  { name: "Fire Extinguisher", icon: <FaFireExtinguisher /> },
  { name: "Emergency Exit", icon: <IoIosExit /> },
  { name: "Security System", icon: <MdOutlineSecurity /> },
  { name: "Fire Escape Ladder", icon: <TbLadder /> }
];

const features = ["Wifi", "Free Parking", "Laundry Facilities", "Heating", "AC", "Paid Parking", "Coffee Maker", "Essential Kitchen Applicances", "Stove", "Kitchen Utensils", "Fridge", "Tvs", "Beddings", "Hangers"];
const amenities = ["Hot Tub", "BBQ Grill", "Patio", "Outdoor/ Backyard Dinning Area", "Lake Access", "Mountain View", "GYM", "Pool Table", "Fireplace", "Swimming Pool", "Sauna"];
const safetyFeatures = ["Smoke Alarm", "24/7 Security", "First Aid Kit", "Fire Extinguisher", "Emergency Exit", "Security System", "Fire Escape Ladder"];


export default function Home() {

  return (
    <div
      className='
          max-w-[2520px] 
          mx-auto
        '
    >
      <div
        className='relative w-full border-b-2 '
      >
        <img
          className='w-full h-full filter brightness-50 bg-cover'
          alt="header image"
          src='/images/bg5.png'
        />
        <SearchBar/>
      </div>

      <div className="p-4">
        <CategoryFilter/>
      </div>

      <div className="flex">
        <div className="h-screen p-4 mt-4 mb-20 ml-4 mr-4 bg-white rounded-lg shadow-lg xl:w-1/6 sm:w-2/6 shadow-gray-500">
          <h1 className="mb-4 text-lg font-bold">Filter Options</h1>

          <div className="mb-4">
              <label htmlFor="location" className="block mb-2">Location:</label>
              <input type="text" id="location" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Enter Location" />
          </div>

          <div className="mb-4">
              <label htmlFor="price" className="block mb-2">Price:</label>
              <div className="flex">
                  <input type="text" id="min-price" className="w-1/2 p-2 mr-2 border border-gray-300 rounded-md" placeholder="Min" />
                  <input type="text" id="max-price" className="w-1/2 p-2 border border-gray-300 rounded-md" placeholder="Max" />
              </div>
          </div>
        
          <div className="mb-4">
              <label htmlFor="bedrooms" className="block mb-2">Bedrooms:</label>
              <input type="number" id="bedrooms" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Enter Number of Bedrooms" />
          </div>

          <div className="mb-4">
              <label htmlFor="bathrooms" className="block mb-2">Bathrooms:</label>
              <input type="number" id="bathrooms" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Enter Number of Bathrooms" />
          </div>

          <button className="py-2 font-bold text-white bg-gray-700 border border-gray-700 rounded-lg hover:bg-white hover:text-gray-700 xl:px-20 sm:px-16">
              Apply
          </button>
        </div>

        <div className="flex flex-col mt-4 mb-20 mr-4 bg-white rounded-lg shadow-lg xl:w-5/6 sm:w-4/6 shadow-gray-500">
            <h2 className="p-4 text-2xl font-bold">Most Popular Listings</h2>

            <div className="p-4">
                <a href="/propertydetails">
                  <div className="flex w-full p-4 mb-4 bg-white border border-gray-300 rounded-lg xl:flex-row sm:flex-col">
                    <div className="flex">
                          <img 
                            src='https://a0.muscache.com/im/pictures/053a408d-3b32-4fa6-b846-2c7b024f9270.jpg?im_w=1200' 
                            alt="placeholder" 
                            className="object-cover w-48 h-48 rounded-lg" 
                          />
                      <div className="flex flex-row">
                        <div className="flex flex-col justify-between w-2/3 ml-4">
                            <h3 className="text-lg font-semibold">Somerset Cottage at West Avenue Cider House</h3>
                            <p className="text-justify text-gray-700">Welcome to West Avenue Cider! During Summer 2018 we renovated an existing outbuilding on the property into a 3 bedroom cottage for guests who are visiting the Cider House and who are visiting the Hamilton area. Its light filled and spacious and we hope you will get to spend some time with us.</p>
                            
                            <div className="bottom-0 flex flex-row">
                                <span className="mt-2"><CiLocationOn /></span>
                                <p className="mt-2 ml-2 text-sm text-gray-500">Hamilton, ON, Canada</p>
                            </div>
                        </div>
                        <div className="flex flex-col w-1/3 ml-4 border-l border-gray-300">
                          <h1 className='ml-4 font-semibold text-md'>What this place offers</h1>
                          <div className="flex flex-row">
                            <div className="flex flex-col ml-4 w-[50%]">
                              <h1 className='mt-2 mb-4 text-sm font-semibold'>Features</h1>
                              {features.slice(0, 3).map(feature => {
                                  const icon = iconsMap.find(icon => icon.name === feature);
                                  return (
                                      <div key={feature} className="flex items-center mt-2 text-xs">
                                          {icon && icon.icon}
                                          <span className="ml-2">{feature}</span>
                                      </div>
                                  );
                              })}
                            </div>
                            <div className="flex flex-col ml-4 w-[50%]">
                              <h1 className='mt-2 mb-4 text-sm font-semibold'>Amenities</h1>
                              {amenities.slice(0, 3).map(amenity => {
                                  const icon = iconsMap.find(icon => icon.name === amenity);
                                  return (
                                      <div key={amenity} className="flex items-center mt-2 text-xs">
                                          {icon && icon.icon}
                                          <span className="ml-2">{amenity}</span>
                                      </div>
                                  );
                              })}
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-center mt-6">
                            <p className="text-gray-700">$300 CAD</p>
                            <p className="mt-1 ml-2 text-xs text-gray-500">night</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

                <a href="/propertydetails">
                  <div className="flex w-full p-4 mb-4 bg-white border border-gray-300 rounded-lg xl:flex-row sm:flex-col">
                      <div className="flex">
                          <img 
                            src='https://a0.muscache.com/im/pictures/prohost-api/Hosting-950729835440706966/original/9fd156b5-afab-4b0e-9400-c007d52e2e96.jpeg?im_w=1200' 
                            alt="placeholder" 
                            className="object-cover w-48 h-48 rounded-lg" 
                          />
                      <div className="flex flex-row">
                        <div className="flex flex-col justify-between w-2/3 ml-4">
                            <h3 className="text-lg font-semibold">Rock n House - Unique Modern Escape with Views</h3>
                            <p className="text-justify text-gray-700">Escape to Rock n House, a marvel featured in Architectural Digest, nestled on a 14-acre estate down a secluded road - 2 hrs from NYC. This architectural wonder with panoramic views and circular design offers seamless integration with nature. Inside, the main level offers open concept living, sunken lounge and dining for 10, with radiant heat & central air to ensure your comfort. Outdoors enjoy stunning vistas from the outdoor firepit and porch table.</p>
                            
                            <div className="bottom-0 flex flex-row">
                                <span className="mt-2"><CiLocationOn /></span>
                                <p className="mt-2 ml-2 text-sm text-gray-500">Saugerties, NY, United States</p>
                            </div>
                        </div>
                        <div className="flex flex-col w-1/3 ml-4 border-l border-gray-300">
                          <h1 className='ml-4 font-semibold text-md'>What this place offers</h1>
                          <div className="flex flex-row">
                            <div className="flex flex-col ml-4 w-[50%]">
                              <h1 className='mt-2 mb-4 text-sm font-semibold'>Features</h1>
                              {features.slice(0, 3).map(feature => {
                                  const icon = iconsMap.find(icon => icon.name === feature);
                                  return (
                                      <div key={feature} className="flex items-center mt-2 text-xs">
                                          {icon && icon.icon}
                                          <span className="ml-2">{feature}</span>
                                      </div>
                                  );
                              })}
                            </div>
                            <div className="flex flex-col ml-4 w-[50%]">
                              <h1 className='mt-2 mb-4 text-sm font-semibold'>Amenities</h1>
                              {amenities.slice(0, 3).map(amenity => {
                                  const icon = iconsMap.find(icon => icon.name === amenity);
                                  return (
                                      <div key={amenity} className="flex items-center mt-2 text-xs">
                                          {icon && icon.icon}
                                          <span className="ml-2">{amenity}</span>
                                      </div>
                                  );
                              })}
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-center mt-6">
                            <p className="text-gray-700">$320 CAD</p>
                            <p className="mt-1 ml-2 text-xs text-gray-500">night</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

                <a href="/propertydetails">
                  <div className="flex w-full p-4 mb-4 bg-white border border-gray-300 rounded-lg xl:flex-row sm:flex-col">
                      <div className="flex">
                          <img 
                            src='https://a0.muscache.com/im/pictures/miso/Hosting-53417893/original/63787420-6a55-4d88-b459-c65d0251ba31.jpeg?im_w=1200' 
                            alt="placeholder" 
                            className="object-cover w-48 h-48 rounded-lg" 
                          />
                      <div className="flex flex-row">
                        <div className="flex flex-col justify-between w-2/3 ml-4">
                            <h3 className="text-lg font-semibold">Roxbury Dome House 4BR w/ Mtn Views & Fire Pit</h3>
                            <p className="text-justify text-gray-700">Stay in a light-filled modern architectural wonder unlike anything else you will find in the Catskills— just 5 miles outside of the town of Roxbury and 7 miles outside the town of Margaretville! The Shell House half dome, featured in Dwell and other design magazines, was built to be in harmony with the environment and boasts a beautiful view of the Catskills from every room. Extraordinary communal spaces and unique rooms will make this a stay you will not soon forget.</p>
                            
                            <div className="bottom-0 flex flex-row">
                                <span className="mt-2"><CiLocationOn /></span>
                                <p className="mt-2 ml-2 text-sm text-gray-500">Roxbury, NY, United States</p>
                            </div>
                        </div>
                        <div className="flex flex-col w-1/3 ml-4 border-l border-gray-300">
                          <h1 className='ml-4 font-semibold text-md'>What this place offers</h1>
                          <div className="flex flex-row">
                            <div className="flex flex-col ml-4 w-[50%]">
                              <h1 className='mt-2 mb-4 text-sm font-semibold'>Features</h1>
                              {features.slice(0, 3).map(feature => {
                                  const icon = iconsMap.find(icon => icon.name === feature);
                                  return (
                                      <div key={feature} className="flex items-center mt-2 text-xs">
                                          {icon && icon.icon}
                                          <span className="ml-2">{feature}</span>
                                      </div>
                                  );
                              })}
                            </div>
                            <div className="flex flex-col ml-4 w-[50%]">
                              <h1 className='mt-2 mb-4 text-sm font-semibold'>Amenities</h1>
                              {amenities.slice(0, 3).map(amenity => {
                                  const icon = iconsMap.find(icon => icon.name === amenity);
                                  return (
                                      <div key={amenity} className="flex items-center mt-2 text-xs">
                                          {icon && icon.icon}
                                          <span className="ml-2">{amenity}</span>
                                      </div>
                                  );
                              })}
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-center mt-6">
                            <p className="text-gray-700">$350 CAD</p>
                            <p className="mt-1 ml-2 text-xs text-gray-500">night</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
            </div>
        </div>
        </div>


    </div>
  );
}
