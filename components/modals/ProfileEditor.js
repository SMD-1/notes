import { useContext, useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  ModalFooter,
  Input,
  FormControl,
  FormLabel,
  Avatar,
  Button,
} from "@chakra-ui/react";
import { TbLogout, TbEdit } from "react-icons/tb";
import { userContext } from "../../context/userContext";

function ProfileEditor({ user, isModalOpen, onModalClose }) {
  const { logoutUser, updateUser } = useContext(userContext);
  const [newFullname, setNewFullname] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (Object.keys(user).length === 0) return;

    setNewFullname(user.data.user.fullName);
    setNewUsername(user.data.user.username);
    console.log(user);
  }, [user]);

  const submitHandler = async () => {
    try {
      const result = await updateUser(
        user.data.user._id,
        newFullname,
        newUsername
      );
      console.log(result);
    } catch (err) {
      console.log(err);
    }
    console.log(newUsername, newFullname);
    setEditing(!editing);
  };

  return (
    <Modal size="md" isOpen={isModalOpen} onClose={onModalClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader mt={6} textAlign="center">
          User Profile
        </ModalHeader>
        {editing ? (
          <>
            <ModalBody textAlign="center">
              {user && <Avatar src={user.data.user.photoURL} size="xl" />}
              <Text mt={2} fontWeight="bold" fontSize="lg">
                {user && user.data.user.fullName}
              </Text>
              <Text fontWeight="400" fontSize="lg">
                @{user && user.data.user.username}
              </Text>

              <FormControl isRequired>
                <FormLabel mt="40px">Full Name</FormLabel>
                <Input
                  placeholder="Enter your email *"
                  size="lg"
                  type="text"
                  value={newFullname}
                  variant="outline"
                  onChange={(e) => setNewFullname(e.target.value)}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel mt={"15px"}>Username</FormLabel>
                <Input
                  placeholder="Enter your email *"
                  size="lg"
                  type="text"
                  value={newUsername}
                  variant="outline"
                  onChange={(e) => setNewUsername(e.target.value)}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter justifyContent="space-between" px={6}>
              <Button
                colorScheme="red"
                onClick={() => setEditing(!editing)}
                px={8}
              >
                Close
              </Button>

              <Button colorScheme="green" px={6} onClick={submitHandler}>
                Submit
              </Button>
            </ModalFooter>
          </>
        ) : (
          <>
            <ModalBody textAlign="center">
              {user && <Avatar src={user.data.user.photoURL} size="xl" />}
              <Text mt={2} fontWeight="bold" fontSize="lg">
                {user && user.data.user.fullName}
              </Text>
              <Text fontWeight="400" fontSize="lg">
                @{user && user.data.user.username}
              </Text>
            </ModalBody>
            <ModalFooter justifyContent="space-between" px={6}>
              <Button
                colorScheme="red"
                rightIcon={<TbLogout size="20px" />}
                onClick={logoutUser}
              >
                Logout
              </Button>
              <Button
                rightIcon={<TbEdit size="20px" />}
                colorScheme="green"
                onClick={() => setEditing(!editing)}
              >
                Edit
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default ProfileEditor;
