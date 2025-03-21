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
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { userContext } from "../context/userContext";
import Link from "next/link";
import ProfileEditor from "./modals/ProfileEditor";
import ThemeToggler from "./ThemeToggler";

const Links = ["Home", "Upload", "Notes"];
const NavLink = ({ children, endPoint }) => (
  <Link href={endPoint == "home" ? "/" : `/${endPoint}`}>
    <Button
      variant="ghost"
      px={4}
      _hover={{ background: useColorModeValue("gray.300", "blue.500") }}
    >
      {children}
    </Button>
  </Link>
);

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();
  const { user } = useContext(userContext);

  return (
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
          <Box fontWeight="bold" fontSize="18px" mr={{ base: "0", md: "20px" }}>
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
              onClick={isModalOpen ? onModalClose : onModalOpen}
            >
              {user?.data?.user?.photoURL ? (
                <Avatar size="md" src={user.data.user.photoURL} />
              ) : (
                ``
              )}
            </MenuButton>
            <ThemeToggler />
          </Menu>
        </Flex>
      </Flex>

      {isModalOpen && (
        <ProfileEditor
          isModalOpen={isModalOpen}
          onModalClose={onModalClose}
          user={user}
        />
      )}

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link} endPoint={link.toLocaleLowerCase()}>
                {link}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
