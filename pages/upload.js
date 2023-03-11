import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { AiFillHome } from "react-icons/ai";
import { useRef, useState, useContext } from "react";
import { userContext } from "../context/userContext";

const Upload = () => {
  const titleRef = useRef();
  const subRef = useRef();
  const descRef = useRef();
  const [inputFile, setInputFile] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleOnInputFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;
    setInputFile(file);
    console.log(file);
  };
  const { user } = useContext(userContext);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", titleRef.current.value);
      formData.append("user", user.data.user._id);
      formData.append("desc", descRef.current.value);
      formData.append("subject", subRef.current.value);
      formData.append("noteFile", inputFile);

      const res = await axios.post("https://notes.danjs.tech/notes/", formData);
      setIsLoading(false);
    } catch (err) {
      console.log("err:", err);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Link href="/">
        <Button
          position="absolute"
          leftIcon={<AiFillHome />}
          top={4}
          left={4}
          p={4}
        >
          Home
        </Button>
      </Link>
      <Box
        w="100%"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        minH="100vh"
        p={{ base: "6", md: "8" }}
        gap={4}
      >
        <Box
          display={{ base: "none", lg: "flex" }}
          w={{ base: "100%", md: "50%" }}
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src="/Upload.gif"
            width={500}
            height={500}
            alt="upload gif"
            draggable="false"
          />
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
                <Input
                  ref={titleRef}
                  placeholder="Enter document title/name"
                  size="lg"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Subject</FormLabel>
                <Input ref={subRef} placeholder="Enter Subject" size="lg" />
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Input
                  ref={descRef}
                  placeholder="Enter Description"
                  size="lg"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Select file</FormLabel>
                <Input
                  size="lg"
                  type="file"
                  onChange={(e) => handleOnInputFileChange(e)}
                />
              </FormControl>
            </Stack>

            <Button
              onClick={handleOnSubmit}
              type="submit"
              isLoading={isLoading}
              loadingText="Uploading..."
              variant="solid"
              colorScheme="blue"
              mt={4}
              w={{ base: "100%", sm: "70%", md: "400px" }}
            >
              Upload
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Upload;
