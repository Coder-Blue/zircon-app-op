import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

function Content({ imageSrc, title, description }) {
  return (
    <div className="font-outfit">
      <Flex alignItems="center" mb={8} boxShadow="md" p={6} borderRadius="md">
        <Box flex="1" mr={4}>
          <Image
            src={imageSrc}
            alt={title}
            borderRadius="lg"
            boxSize="289px"
            boxShadow="lg"
          />
        </Box>
        <Box flex="2">
          <Heading as="h2" size="lg" mb={4}>
            {title}
          </Heading>
          <Text fontSize="lg" mt={2}>
            {description}
          </Text>
        </Box>
      </Flex>
    </div>
  );
}

export default Content;
