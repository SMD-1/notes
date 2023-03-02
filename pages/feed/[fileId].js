import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function ViewFile() {
  const router = useRouter();
  const [fileData, setFileData] = useState(null);
  //TODO: handle file not found error
  //TODO: improve loading or do ssr
  //TODO: maybe handle overflow

  // chal master tata bye bye
  useEffect(() => {
    if (!router.isReady) return;

    const { fileId } = router.query;
    const fetchFile = async () => {
      try {
        const { data } = await axios("http://localhost:4001/notes/" + fileId);
        setFileData(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFile();
  }, [router.isReady]);
  return (
    <div>
      {fileData?.url ? (
        <Box style={{ height: "100vh", overflow: "hidden" }}>
          <iframe
            src={fileData.url}
            style={{ width: "100vw", height: "100vh" }}
          ></iframe>
        </Box>
      ) : (
        <Text>Loading baba.....</Text>
      )}
    </div>
  );
}

export default ViewFile;
