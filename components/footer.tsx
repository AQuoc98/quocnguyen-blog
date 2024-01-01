import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box textAlign="center" opacity={0.4} fontSize="sm" mt={4}>
      &copy; {new Date().getFullYear()} Quoc Nguyen. All Rights Reserved.
    </Box>
  )
}

export default Footer
