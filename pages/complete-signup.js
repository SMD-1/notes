import { Box, Button, Container, Input } from "@chakra-ui/react";
import axiosInstance from "../utils/axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../context/userContext";

function CompleteSignUpPage() {
  const { FBUser } = useContext(userContext);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (FBUser) {
      setEmail(FBUser.email);
      setFullName(FBUser?.displayName || "");
      setPhotoURL(FBUser?.photoURL || "");
    }
  }, [FBUser]);

  const handleOnSubmitClick = async () => {
    try {
      const payload = {
        email,
        fullName,
        username,
        photoURL,
        googleUID: FBUser.uid,
      };
      const res = await axiosInstance.post("/users", payload);
      router.push("/");
      //TODO: Toast
    } catch (err) {
      console.log("error: ", err);
      //TODO: Toast
    }
  };
  if (!FBUser) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <Container
      maxW={"3xl"}
      display="flex"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
    >
      <Box p={4}>
        <Input
          my={3}
          id="username"
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          my={3}
          id="name"
          placeholder="Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Input
          my={3}
          id="email"
          readOnly={true}
          disabled={true}
          value={email}
        />
        {photoURL ? (
          <Image
            src={photoURL}
            alt={"profile photo"}
            width={100}
            height={100}
            my={3}
          />
        ) : (
          <Box as="p" margin={{ base: 0, lg: "12px auto" }}>
            photo not available
          </Box>
        )}
        <Button
          w={{ base: "100%", lg: "50%" }}
          display="flex"
          margin={{ base: 0, lg: "0 auto" }}
          placeItems="center"
          colorScheme="blue"
          onClick={handleOnSubmitClick}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default CompleteSignUpPage;
