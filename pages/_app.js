import { ChakraProvider } from "@chakra-ui/react";
import { useContext } from "react";
import LoadingOverlay from "../components/LoadingOverlay";
import LoadingContext from "../context/loadingContext";
import UserContextProvider from "../context/userContext";

function MyApp({ Component, pageProps }) {
  const { isLoading } = useContext(LoadingContext);
  return (
    <ChakraProvider>
      <UserContextProvider>
        {isLoading && <LoadingOverlay />}
        <LoadingOverlay />
        <Component {...pageProps} />
      </UserContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
