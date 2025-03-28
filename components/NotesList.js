import { Box, Flex, IconButton, Link, ListItem, Text } from "@chakra-ui/react";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { FiShare2 } from "react-icons/fi";
// takes file size in bytes and returns size in MB or KB
const getSize = (size) => {
  const MEGABYTE = 1_000 * 1_000;

  return size / MEGABYTE > 1
    ? `${(size / MEGABYTE).toFixed(2)} MB`
    : `${(size / 1000).toFixed(2)} KB`;
};
const NotesList = ({ documents }) => {
  // console.log(documents);
  const share = async (id) => {
    const url = `${window.location.origin}${window.location.pathname}/${id}`;
    console.log(url);
    try {
      if (navigator.share) {
        await navigator.share({
          text: "I have found this awesome recipe❤️, You should also try this",
          url: url,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box display="flex" justifyContent="center" flexDir="column" mb={4}>
      {documents.length === 0 && (
        <Text fontSize="3xl" fontWeight="bold" opacity="0.5" textAlign="center">
          There are no notes available
        </Text>
      )}
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
            <Flex gap={3} justifyContent="space-between" alignItems="center">
              <Link target="_blank" href={`/notes/${item._id}`} w="100%">
                <Flex>
                  <BsFileEarmarkPdfFill color="red" size="3rem" />
                  <Flex flexDir="column">
                    {item.title}
                    <Box>{getSize(item.size)}</Box>
                  </Flex>
                </Flex>
              </Link>
              <IconButton onClick={() => share(item._id)} zIndex="0">
                <FiShare2 size="1.5rem" />
              </IconButton>
            </Flex>
            {item.user && (
              <Text opacity="0.7" pl={2} fontSize="sm">
                Uploaded By: @{item.user.username}
              </Text>
            )}
          </ListItem>
        );
      })}
    </Box>
  );
};

export default NotesList;
