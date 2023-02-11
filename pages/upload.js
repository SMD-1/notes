import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";

const Upload = () => {
  return (
    <>
      <Link href="/">
        <Button position="absolute" top={4} left={4} px={6} py={4} >Back</Button>
      </Link>
      <Box
        w="100%"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        minH="100vh"
        p={8}
        gap={4}
      >
        <Box
          display={{ base: "none", lg: "flex" }}
          border="1px solid #000"
          w={{ base: "100%", lg: "50%" }}
          justifyContent="center"
          alignItems="center"
        >
          <Heading>Image will be here </Heading>
        </Box>
        <Box
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          w={{ base: "100%", lg: "50%" }}
        >
          <Heading mb="40px">Uplaod Document</Heading>
          <form w={{ base: "90%", sm: "70%", md: "300px" }}>
            <Stack>
              <FormControl isRequired>
                <FormLabel>Title</FormLabel>
                <Input placeholder="Enter document title/name" size="lg" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Subject</FormLabel>
                <Input placeholder="Enter Subject" size="lg" />
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Input placeholder="Enter Description" size="lg" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Select file</FormLabel>
                <Input placeholder="Enter Subject" size="lg" type="file" />
              </FormControl>
            </Stack>

            <Button
              mt={4}
              colorScheme="blue"
              type="submit"
              w={{ base: "100%", sm: "70%", md: "400px" }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Upload;
