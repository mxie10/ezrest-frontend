import { MdOutlineCoffeeMaker, MdPaid, MdLocalLaundryService } from "react-icons/md";
import { GiHotSurface, GiHanger, GiDesk } from "react-icons/gi";
import { BiSolidFridge, BiSolidBlanket } from "react-icons/bi";
import { FaWifi, FaParking } from "react-icons/fa";
import { FaHotjar, FaKitchenSet } from "react-icons/fa6";
import { TbAirConditioning, TbToolsKitchen3 } from "react-icons/tb";
import { PiTelevisionBold } from "react-icons/pi";
import { FaHotTub, FaWater, FaChair, FaMountain } from "react-icons/fa";
import { MdOutdoorGrill, MdOutlineFireplace, MdDinnerDining } from "react-icons/md";
import { FaWaterLadder } from "react-icons/fa6";
import { GiPoolTableCorner, GiHeatHaze } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { WiSmoke } from "react-icons/wi";
import { Tb24Hours, TbLadder } from "react-icons/tb";
import { FaFirstAid, FaFireExtinguisher } from "react-icons/fa";
import { IoIosExit } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";

import paypal from '../../public/images/paymentMethod/paypal.png';
import visa from '../../public/images/paymentMethod/visa.png';
import biance from '../../public/images/paymentMethod/binance.png';
import wechat from '../../public/images/paymentMethod/wechat.png';
import banktransfer from '../../public/images/paymentMethod/banktransfer.png';

export const iconsMap = [
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

export const paymentTypeIcons = [
  {
    title: 'paypal',
    src: paypal,
    width: 130,
    height: 100
  },
  {
    title: 'visa',
    src: visa,
    width: 300,
    height: 100
  },
  {
    title: 'biance',
    src: biance,
    width: 130,
    height: 100
  },
  {
    title: 'wechat',
    src: wechat,
    width: 330,
    height: 100
  },
  {
    title: 'banktransfer',
    src: banktransfer,
    width: 130,
    height: 100
  }
]