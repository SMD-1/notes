import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  // Link as CLink,
} from "@chakra-ui/react";
import { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { Fragment } from "react";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Fragment>
      <Box
        w="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minH="100vh"
      >
        <>
          {/* <Flex
        justifyContent="space-between"
        alignSelf={"start"}
        w="100%"
        px={"30px"}
        position={"sticky"}
        mt={"30px"}
        top="0"
      >
        <Box as="p">Logo Here</Box>
        <Box>
          Don't Have an Account?
          <Link href="/signup">
            <Button
              variant="ghost"
              _hover={{ bg: "none" }}
              _focus={{ bg: "none" }}
              color="teal.500"
              >
              Signup
              </Button>
              </Link>
              </Box>
            </Flex> */}
        </>

        <Box display="flex" flexDir="column" maxW="400px" textAlign="center">
          <Heading as="h1" size="xl">
            Welcome Back
          </Heading>
          <Center letterSpacing="1px">Login into Account</Center>
        </Box>
        {/* email */}
        <Input
          placeholder="Enter your email *"
          size="lg"
          type={"email"}
          variant="outline"
          w={{ base: "90%", sm: "70%", md: "400px" }}
          mt={"40px"}
          outline={"none"}
          borderColor={"gray.400"}
        />
        {/* password */}
        <InputGroup
          size="lg"
          w={{ base: "90%", sm: "70%", md: "400px" }}
          borderColor={"gray.400"}
          mt={"20px"}
        >
          <Input
            outline={"none"}
            pr="4.5rem"
            variant="outline"
            type={show ? "text" : "password"}
            placeholder="Enter your password *"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        {/* login button */}
        <Button
          w={{ base: "90%", sm: "70%", md: "400px" }}
          mt="40px"
          size={"lg"}
          border="2px solid rgba(255, 255, 255, 0.1)"
          colorScheme={"blue"}
        >
          LOGIN
        </Button>

        <Button
          w={{ base: "90%", sm: "70%", md: "400px" }}
          mt="40px"
          size={"lg"}
          border="2px solid rgba(255, 255, 255, 0.1)"
          leftIcon={<FcGoogle size={"1.5rem"} />}
          variant="solid"
          color={"blackALpha.100"}
        >
          Login with Google
        </Button>

        <Flex
          justifyContent="center"
          w={{ base: "90%", sm: "70%", md: "400px" }}
          alignItems="center"
          mt={"30px"}
        >
          <Box>Don't Have an Account?</Box>
          <Link href="/signup">
            <Button
              variant="ghost"
              _hover={{ bg: "none" }}
              _focus={{ bg: "none" }}
              color="teal.500"
            >
              Signup
            </Button>
          </Link>
        </Flex>
      </Box>
    </Fragment>
  );
};

export default Login;
