import { Box } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { userContext } from '../context/userContext'


const LoadingOverlay = () => {
  const {isLoading} = useContext(userContext)
  if(!isLoading)
    return null
  return (
    <Box w="100vw" h="100vh" fontSize="5xl" fontWeight="bold" display="flex" justifyContent="center" alignItems="center">
      Loading.....
    </Box>
  )
}

export default LoadingOverlay