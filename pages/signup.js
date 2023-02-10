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
import { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
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
            Welcome Aboard
          </Heading>
          <Center letterSpacing="1px">Let's create your Account</Center>
        </Box>
        {/* username */}
        <Input
          placeholder="Usesrname *"
          size="lg"
          type={"text"}
          variant="outline"
          w={{ base: "90%", sm: "70%", md: "400px" }}
          mt={"40px"}
          outline={"none"}
          borderColor={"gray.400"}
        />
        {/* email */}
        <Input
          placeholder="Enter your email *"
          size="lg"
          type={"email"}
          variant="outline"
          w={{ base: "90%", sm: "70%", md: "400px" }}
          mt={"20px"}
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
        {/* confirm password */}
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
            placeholder="Confirm password *"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Button
          w={{ base: "90%", sm: "70%", md: "400px" }}
          mt="40px"
          size={"lg"}
          border="2px solid rgba(255, 255, 255, 0.1)"
          colorScheme={"blue"}
        >
          REGISTER
        </Button>

        <Button
          w={{ base: "90%", sm: "70%", md: "400px" }}
          leftIcon={<FcGoogle size={"1.5rem"} />}
          mt="40px"
          size={"lg"}
          border="2px solid rgba(255, 255, 255, 0.1)"
          colorScheme="gray"
          variant="solid"
          color="black"
        >
          Sign in with Google
        </Button>

        <Flex
          justifyContent="center"
          w={{ base: "90%", sm: "70%", md: "400px" }}
          alignItems="center"
          mt={"30px"}
        >
          <Box>Already Have an Account?</Box>
          <Link href="/login">
            <Button
              variant="ghost"
              _hover={{ bg: "none" }}
              _focus={{ bg: "none" }}
              color="teal.500"
            >
              Login
            </Button>
          </Link>
        </Flex>
      </Box>
    </>
  );
};

export default Signup;