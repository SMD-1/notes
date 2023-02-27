import { Box, Container, Link, List } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import NotesList from "../components/NotesList";

const Feed = () => {
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:4001/notes");
      setDocuments(res.data.data);
      console.log(res.data.data);
    };
    fetchData();
  }, []);
  return (
    <Box minH="100vh">
      <Box position="fixed" w="100%" backdropFilter="auto" backdropBlur="2px">
        <Nav />
      </Box>
      <Box pt="70px">
        <Container maxW={"4xl"}>
          <List>
            <NotesList documents={documents} />
          </List>
        </Container>
      </Box>
    </Box>
  );
};

export default Feed;
