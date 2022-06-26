//sidebar menus component

import {
    UilEstate,
    UilCapsule,
    UilChat,
    UilWaterDropSlash,
    UilCog,
    UilChart,
    UilBell,
    UilHospitalSymbol
} from '@iconscout/react-unicons'

export const SidebarMenus = [
    {
        icon: UilEstate,
        heading: "Home"
    },
    {
        icon: UilHospitalSymbol,
        heading: "Hospitals",
    },
    {
        icon: UilCapsule,
        heading:"Pharmacies"
    },
    {
        icon: UilWaterDropSlash,
        heading: "Blood"
    },
    {
        icon: UilChart,
        heading: "My health"
    },
    {
        icon: UilBell,
        heading: "Notifications"
    },
    {
        icon: UilChat,
        heading: "Chats"
    },
    {
        icon: UilCog,
        heading: "Settings"
    }

];
