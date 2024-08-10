// components/ResetButton.jsx
import { IconButton, Button } from "@chakra-ui/react";

const ResetButton = ({ handleOnClick }) => {
  return (
    <Button
      colorScheme="red"
      onClick={handleOnClick}
      size="lg"
    >
      Reset
    </Button>
    
  );
};

export default ResetButton;
