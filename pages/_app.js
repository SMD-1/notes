import { ChakraProvider } from "@chakra-ui/react";
import UserContextProvider from "../context/userContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
