import { RxDashboard } from "react-icons/rx";
import { AiFillFolderAdd } from "react-icons/ai";
import { FaClipboardList, FaQuestionCircle, FaRegEnvelope } from "react-icons/fa"
import { BiLogInCircle, BiTask } from "react-icons/bi";
import { TbReportAnalytics } from "react-icons/tb";

export const linkIcons = [ 
    {
        icon : RxDashboard,
        text: 'Dashboard',
        url: '/dashboard'
    },
    {
        icon : AiFillFolderAdd,
        text: 'Register Complains',
        url: 'register-complains'
    },
    {
        icon : BiTask,
        text: 'Proposals'
    },
    {
        icon : FaClipboardList,
        text: 'ToDo List',
        url: 'to-do-list'
    },
    {
        icon: FaQuestionCircle,
        text: 'Request',
        url: 'request'
    },
    {
        icon: FaRegEnvelope,
        text: 'Memo'
    },
    {
        icon: TbReportAnalytics,
        text: 'Reports'
    },
    {
        icon : BiLogInCircle,
        text: 'Log Out'
    }
    
    
]