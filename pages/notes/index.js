import { Box, Container, List, Skeleton, Stack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import NotesList from "../../components/NotesList";

const Feed = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://notes.danjs.tech/notes/");
      setDocuments(res.data.data);
      setLoading(false);
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
          {loading ? (
            <Stack>
              <Skeleton height="60px" mt={4} rounded="md" />
              <Skeleton height="60px" mt={4} rounded="md" />
              <Skeleton height="60px" mt={4} rounded="md" />
              <Skeleton height="60px" mt={4} rounded="md" />
              <Skeleton height="60px" mt={4} rounded="md" />
              <Skeleton height="60px" mt={4} rounded="md" />
              <Skeleton height="60px" mt={4} rounded="md" />
            </Stack>
          ) : (
            <List>
              <NotesList documents={documents} />
            </List>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default Feed;
