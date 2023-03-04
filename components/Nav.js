import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link as CLink,
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
import { FaUserCircle } from "react-icons/fa";
import { userContext } from "../context/userContext";
import Link from "next/link";

const Links = ["Home", "Upload", "Notes"];

const NavLink = ({ children, endPoint }) => (
  <Link href={endPoint == "home" ? "/" : `/${endPoint}`}>
    <Button variant="ghost" px={4} _hover={{ background: "teal.100" }}>
      {children}
    </Button>
  </Link>
);

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { logoutUser, user } = useContext(userContext);
  console.log("nav", user);

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "blue.900")} px="2rem">
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
                mr={2}
              >
                {user && user.data.user.photoURL ? (
                  <Avatar size={"md"} src={user.data.user.photoURL} />
                ) : (
                  <Avatar
                    size="sm"
                    src="https://ik.imagekit.io/1place/Notes/user_nWSGLM3AGj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677957308998"
                  />
                  // <FaUserCircle size="2.5rem" />
                )}
              </MenuButton>
              {user && user.data.user.username}
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
