import { Box, Flex, Link, ListItem } from "@chakra-ui/react";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { FiShare2 } from "react-icons/fi";
import { useRouter } from "next/router";

const NotesList = ({ documents }) => {
  const router = useRouter();
  return (
    <Box display="flex" justifyContent="center" flexDir="column">
      {documents.map((item, index) => {
        return (
          <ListItem
            key={index}
            mt={3}
            p={3}
            boxShadow="md"
            rounded="md"
            cursor="pointer"
            border="2px solid rgba(0, 0, 0, 0.1)"
          >
            <Box
              display="flex"
              gap={3}
              justifyContent="space-between"
              onClick={() => router.push("/view")}
            >
              <Flex>
                <BsFileEarmarkPdfFill color="red" size="3rem" />
                <Flex flexDir="column">
                  <Link target="_blank" href={item.url} color="blue.600">
                    {item.title}
                  </Link>
                  {item.size / (1000 * 1000) > 1 ? (
                    <Box>{(item.size / (1000 * 1000)).toFixed(2)} MB</Box>
                  ) : (
                    <Box>{(item.size / 1000).toFixed(2)} KB</Box>
                  )}
                </Flex>
              </Flex>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                cursor="pointer"
                mr={1}
              >
                <FiShare2 size="1.5rem" />
              </Box>
            </Box>
          </ListItem>
        );
      })}
    </Box>
  );
};

export default NotesList;
