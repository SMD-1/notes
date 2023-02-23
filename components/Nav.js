import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { userContext } from "../context/userContext";

const Links = ["Home", "Upload", "Team"];

const NavLink = ({ children, endPoint }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={endPoint == "upload" ? `/${endPoint}` : "/"}
  >
    {children}
  </Link>
);

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { logoutUser } = useContext(userContext);

  return (
    <>
      <Box bg={useColorModeValue("transparent", "gray.900")} px="2rem">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <GrClose /> : <GiHamburgerMenu />}
            aria-label={"Open Menu"}
            display={{ base: "flex", md: "none" }}
            justifyContent="center"
            alignItems="center"
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box
              fontWeight="bold"
              fontSize="18px"
              mr={{ base: "0", md: "20px" }}
            >
              {"<Assignment />"}
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              color="#666666"
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link} endPoint={link.toLowerCase()}>
                  {link}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"md"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList color="#666666">
                <MenuItem>Profile</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem onClick={logoutUser}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
