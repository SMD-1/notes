/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { Fragment } from "react";
import { userContext } from "../context/userContext";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const {googleSignin, login} = useContext(userContext)
  const route = useRouter();
  const handleOnGoogleLogin = async () => {
    try {
      await googleSignin();
      route.push("/")
    } catch (err) {
      console.log(err)
    }
  }
  const handleOnEmailAndPassLogin = async () => {
    try {
      await login(email, password)
      route.push("/")
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <Fragment>
      <Link href="/">
      <Button position="absolute" top={4} left={4} px={6} py={4} >Back</Button>
      </Link>

      <Box
        w="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minH="100vh"
      >
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
          onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
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
          onClick={handleOnEmailAndPassLogin}
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
          onClick={handleOnGoogleLogin}
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
