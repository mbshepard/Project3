import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'

export {
    GoHome as HomeIcon 
} from "react-icons/go"

export {
    FaChartBar as AnalysisIcon
} from "react-icons/fa"

export {
    ImHeadphones as ListenIcon
} from "react-icons/im"

export {
    BiMessageCheck as ReviewIcon
} from "react-icons/bi"

export {
    MdPlaylistAdd as AddClipIcon
} from "react-icons/md"

export {
    RiPlayList2Fill as PlayListsIcon,
} from "react-icons/ri"

export {
    TiDeleteOutline as DeleteClipIcon
} from 'react-icons/ti'

export const AnimatePlayIcon = () => (
    <FaPlayCircle className="react-jinke-music-player-play-icon" />
)
export const AnimatePauseIcon = () => (
    <FaPauseCircle className="react-jinke-music-player-pause-icon" />
)