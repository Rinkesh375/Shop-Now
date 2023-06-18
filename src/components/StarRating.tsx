import { Box ,Text} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

interface RatingProps {
  rating: number;
  numReviews: string;
}
const StarRating = ({ rating, numReviews }: RatingProps) => {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          else if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Text as="span" ml="2" color="gray.600" fontSize="1.2rem" fontWeight="bold">
        {numReviews} review{numReviews && "s"}
      </Text>
    </Box>
  );
};

export default StarRating;