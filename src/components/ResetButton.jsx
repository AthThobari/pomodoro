import { IconButton } from "@chakra-ui/react";
import { RxPlay, RxPause, RxStop, RxReset } from "react-icons/rx"

function ResetButton({ handleOnClick }) {
    return (
        <IconButton title="Reset button" 
        colorScheme="blackAlpha" 
        icon={<RxReset />}
        onClick={handleOnClick} 
        />

    )
}

export default ResetButton