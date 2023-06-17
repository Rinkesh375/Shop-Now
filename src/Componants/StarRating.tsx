import { Box } from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

interface RatingProps {
  rating: number;
  numReviews: string;
  size?: string;
}
const StarRating = ({ rating, numReviews, size }: RatingProps) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      color={"yellow.500"}
      {...(size && {
        fontSize: { base: `2${size}`, sm: `4${size}`, lg: `4${size}` },
      })}>
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
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm" >
        {numReviews} review{numReviews && "s"}
      </Box>
    </Box>
  );
};

export default StarRating;
