import {
  Heading,
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20,
  ];
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre} paddingY="5px">
            <HStack>
              <Skeleton boxSize="32px" borderRadius={8} />
              <SkeletonText width={"100%"} noOfLines={1}>
                Test
              </SkeletonText>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreListSkeleton;
