import { IconButton } from "@chakra-ui/react";
import { RxPlay, RxPause, RxStop } from "react-icons/rx"

function PlayButton({ isStarted, currentTime, handleClick }) {
    return (
        <IconButton title="play or pause timer" 
        colorScheme="blackAlpha" 
        icon={!isStarted ? <RxPlay /> : currentTime === 0? <RxStop/>:<RxPause/>} onClick={handleClick} />
    )
}

export default PlayButton