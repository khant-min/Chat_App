import { Box } from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";

const UserBadgeItem = ({ user, handleFunction }) => {
  return (
    <Box
      px={2}
      py={1}
      borderRadius="lg"
      m={1}
      mb={2}
      display="flex"
      alignItems="center"
      variant="solid"
      fontSize={12}
      backgroundColor="purple"
      color="white"
      cursor="pointer"
      onClick={handleFunction}
    >
      {user.name}
      <IoClose />
    </Box>
  );
};

export default UserBadgeItem;
