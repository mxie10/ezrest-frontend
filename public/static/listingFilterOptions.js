import {IoDiamond} from 'react-icons/io5';
import {BsSnow} from 'react-icons/bs'
import {FaSkiing} from 'react-icons/fa'
import { TbBeach, TbMountain, TbPool} from 'react-icons/tb'
import { GiWindmill,GiIsland,GiBoatFishing,GiCastle,GiForestCamp,GiCaveEntrance,GiCactus,GiBarn } from 'react-icons/gi'

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to the beach!'
    },
    {
        label: 'Windmills',
        icon: GiWindmill,
        description: 'This property has windmills!'
    },
    {
        label: 'Modern',
        icon: GiBarn,
        description: 'This property is modern!'
    },
    {
        label: 'CountrySide',
        icon: TbMountain,
        description: 'This property is in the countryside!'
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: 'This property has a pool!'
    },
    {
        label: 'Islands',
        icon: GiIsland,
        description: 'This property is on an island!'
    },
    {
        label: 'Lake',
        icon: GiBoatFishing,
        description: 'This property is close to a lake!'
    },
    {
        label: 'Castles',
        icon: GiCastle,
        description: 'This property is in a castle!'
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'This property has camping activities!'
    },
    {
        label: 'Arctic',
        icon: BsSnow,
        description: 'This property has snow!'
    },
    {
        label: 'Desert',
        icon: GiCactus,
        description: 'This property has desert!'
    },
    {
        label: 'Barn',
        icon: GiBarn,
        description: 'This property is in a barn!'
    },
    {
        label: 'Lux',
        icon: IoDiamond,
        description: 'This property is luxurious!'
    },
]

export const pricesRange = ['Less than $200', '$200 - $500', '$500 - $1000', '$1000 - $1500', '$1500 - $2000', 'More than $2000']

export const bedRooms = ['1','2','3','4','5','6','7+'];

export const features = ["Wifi", "Free Parking", "Laundry Facilities", "Heating", "AC", "Paid Parking", "Coffee Maker", "Essential Kitchen Applicances", "Stove", "Kitchen Utensils", "Fridge", "Tvs", "Beddings", "Hangers"];
export const amenities = ["Hot Tub", "BBQ Grill", "Patio", "Outdoor/ Backyard Dinning Area", "Lake Access", "Mountain View", "GYM", "Pool Table", "Fireplace", "Swimming Pool", "Sauna"];
export const safetyFeatures = ["Smoke Alarm", "24/7 Security", "First Aid Kit", "Fire Extinguisher", "Emergency Exit", "Security System", "Fire Escape Ladder"];