import { ChakraProvider } from "@chakra-ui/react";
import LoadingOverlay from "../components/LoadingOverlay";
import UserContextProvider from "../context/userContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <UserContextProvider>
        <LoadingOverlay />
        <Component {...pageProps} />
      </UserContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
