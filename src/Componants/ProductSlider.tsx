import { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Text,
  Image,
  Heading
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface Product {
  image: string;
  name:string;
  price:number;
}
const products: Product[] = [
  {
    "name": "Veirdo - Green Cotton Regular Fit Men's T-Shirt ( Pack of 1 )",
    "price": 359,
    "image": "https://n2.sdlcdn.com/imgs/k/e/u/Veirdo-100-Cotton-Regular-Fit-SDL302182620-1-f0fac.jpg",
  },
  {
    "name": "GIYSI - Black Polyester Men's Trackpants ( Pack of 1 )",
    "price": 399,
    "image": "https://n2.sdlcdn.com/imgs/k/j/s/GIYSI-Black-Polyester-Men-s-SDL982045463-1-1f0f7.jpg",
  },
  {
    "name": "UrbanMark Men Casual Knitted Eva Slip-Ons Walking Sports Shoes- Dark Gray",
    "price": 399,
    "image": "https://n4.sdlcdn.com/imgs/k/n/s/UrbanMark-Men-Casual-Knitted-Eva-SDL436263890-1-e399c.jpg",
    
  },
  {
    "name": "Mojua - Pink Cotton Boy's T-Shirt ( Pack of 2 )",
    "price": 519,
    "image": "https://n2.sdlcdn.com/imgs/k/i/x/Mojua-Pink-Cotton-Boy-s-SDL647997574-1-9a8a6.jpg",
    
  },
  {
    "name": "R K Maniyar - Green Rayon Girls Off Shoulder Dress ( Pack of 1 )",
    "price": 419,
    "image": "https://n2.sdlcdn.com/imgs/k/k/o/R-K-Maniyar-Green-Rayon-SDL586530189-1-28456.jpg",
   
  },
  {
    "name": "DECLASSE - Black Silicon Analog Womens Watch",
    "price": 235,
    "image": "https://n1.sdlcdn.com/imgs/j/p/v/DECLASSE-Silicon-Round-Womens-Watch-SDL451104748-1-03e62.jpeg",
   
  },
  {
    "name": "vanraj Blue Net Saree -",
    "price": 625,
    "image": "https://n1.sdlcdn.com/imgs/k/d/3/vanraj-Blue-Net-Saree-SDL202573410-1-0b87c.jpg",
   
  },
  {
    "name": "Neo Garments - Green Cotton Men's Shorts ( Pack of 1 )",
    "price": 339,
    "image": "https://n2.sdlcdn.com/imgs/k/k/m/Neo-Garments-Green-Cotton-Men-SDL950310462-2-d4e3e.jpeg",
    
  },
  {
    "name": "David Miller White Dial Tan Brown PU Strap Men's Watch - DMRCM4C",
    "price": 299,
    "image": "https://n3.sdlcdn.com/imgs/j/p/k/David-Miller-White-Dial-Tan-SDL580697508-1-fe766.jpg",
    
  }
];

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Box display={{sm: "none", md: "block", xl: "block",base:"none"}} w="full" maxW="300px" overflow="hidden" margin="10px">
      <Box border="1px solid lightgrey" borderRadius="25px">
        <Image borderRadius="25px" width="100%" height={["100px","100px","300px","300px"]} src={`${product.image}`}></Image>
      </Box>
      <Box >
        <Text fontSize="15px" mb="2" textAlign="left">{product.name}</Text>
        <Text textAlign="left" fontWeight="bold" color="#FA6F1E">${product.price.toFixed(2)}</Text>
      </Box>
    </Box>
  );
};

const ProductSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % products.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      currentSlide - 1
    );
  };

  const firstIndex = currentSlide;
  const lastIndex = currentSlide + 5 >= products.length ? products.length - 1 : currentSlide + 5;

  return (
    <Box display={{sm: "none", md: "block", xl: "block",base:"none"}} position="relative" w="full" width="92%" mx="auto" marginTop="30px">
      <Heading paddingLeft="6px" marginBottom="15px">Recently Viewed</Heading>
      <Flex w="full" overflow="hidden">
        {products.slice(firstIndex, lastIndex + 1).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </Flex>

      <Flex justify="space-between" mt="4">
        {currentSlide === 0 ? null : <IconButton
          aria-label="Previous Slide"
          icon={<ChevronLeftIcon boxSize="40px" backgroundColor="white" border=" thin solid #ddd" />}
          position="absolute"
          top="42%"
          left="13px"
          transform="translateY(-50%)"
          onClick={handlePrevSlide}
        />}
        {currentSlide === products.length - 6 || products.length<6 ? null : <IconButton
          aria-label="Next Slide"
          icon={<ChevronRightIcon boxSize="40px" border=" thin solid #ddd" />}
          position="absolute"
          top="42%"
          right="15px"
          transform="translateY(-50%)"
          onClick={handleNextSlide}
        />}

      </Flex>
    </Box>
  )
}

export default ProductSlider