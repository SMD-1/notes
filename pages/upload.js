import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";

const Upload = () => {
  return (
    <>
      <Box
        w="100%"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        minH="100vh"
      >
        <Flex
          border="1px solid #000"
          w="50%"
          justifyContent="center"
          alignItems="center"
        >
          <Heading>Image will be here </Heading>
        </Flex>
        <Box
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          w="50%"
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
            </Stack>

            <Button
              mt={4}
              colorScheme="blue"
              type="submit"
              w={{ base: "90%", sm: "70%", md: "400px" }}
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