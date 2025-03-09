import { Box } from "@chakra-ui/react";
import Icons from "./Icons";
interface Props {
  rating: number;
  maxStars?: number;
  size?: number;
}

const StarRating = ({ rating, maxStars = 5, size = 6 }: Props) => {
  const stars: React.JSX.Element[] = [];

  for (let i = 1; i <= maxStars; i++) {
    stars.push(
      <Icons
        key={i}
        iconName={"BiSolidStar"}
        prioritet={true}
        color={i <= rating ? "yellow" : "gray"}
        size={size}
      />
    );
  }

  return (
    <Box display="flex" w={"auto"}>
      {stars}
    </Box>
  );
};

export default StarRating;
