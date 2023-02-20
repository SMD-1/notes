import { Button, Container, Input } from "@chakra-ui/react";
import axios from "axios";
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
    if (!FBUser) return;
    setEmail(FBUser.email);
    setFullName(FBUser?.displayName || "");
    setPhotoURL(FBUser?.photoURL || "");
    console.log(email, photoURL);
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
      const res = await axios.post("http://localhost:4001/users", payload);
      router.push("/feed");
      console.log(res);
      //TODO: Toast
    } catch (err) {
      //TODO: Toast
    }
  };
  if (!FBUser) return <h1>Loading...</h1>;
  return (
    <Container maxW={"6xl"}>
      <Input
        id="username"
        value={username}
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        id="name"
        placeholder="Full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <Input id="email" readOnly={true} disabled={true} value={email} />
      {photoURL ? (
        <Image src={photoURL} width={100} height={100} />
      ) : (
        <p>photo not available</p>
      )}
      <Button onClick={handleOnSubmitClick}>Submit</Button>
    </Container>
  );
}

export default CompleteSignUpPage;
