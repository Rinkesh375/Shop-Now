import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  IconButton,
  Image
} from "@chakra-ui/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface Product {
  image: string;
}

const products: Product[] = [
  {
    image: "https://belk.scene7.com/is/image/Belk/wk09_032723_hp_rl_fh1_carl?$DWP_PHOTO$",
  },
  {
    image: "https://belk.scene7.com/is/image/Belk/wk09_032723_hp_rl_fh2_carl?$DWP_PHOTO$",
  },
  {
    image: "https://belk.scene7.com/is/image/Belk/wk09_032723_hp_rl_fh3_carl?$DWP_PHOTO$",
  },
  {
    image: "https://belk.scene7.com/is/image/Belk/wk09_032723_hp_rl_fh4_carl?$DWP_PHOTO$",
  },
];

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Box width="100%" overflow="hidden" margin="10px">
      <Box width="100%">
        <Image  src={`${product.image}`} width="100%"/>
      </Box>
    </Box>
  );
};

const BannerSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % products.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide - 1);
  };

  const firstIndex = currentSlide;
  const lastIndex =
    currentSlide + 1 >= products.length ? products.length - 1 : currentSlide;

  return (
    <Box position="relative" w="full" maxW="100%" mx="auto" marginTop="30px">
      <Flex w="full" overflow="hidden">
        {products.slice(firstIndex, lastIndex + 1).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </Flex>

      <Flex justify="space-between" mt="4">
        {currentSlide === 0 ? null : (
          <IconButton
            aria-label="Previous Slide"
            icon={<ChevronLeftIcon boxSize="60px" border=" thin solid #ddd" />}
            position="absolute"
            top="50%"
            left="13px"
            transform="translateY(-50%)"
            onClick={handlePrevSlide}
          />
        )}
        {currentSlide === products.length - 6 ? null : (
          <IconButton
            aria-label="Next Slide"
            icon={<ChevronRightIcon boxSize="60px" border=" thin solid #ddd" />}
            position="absolute"
            top="50%"
            right="13px"
            transform="translateY(-50%)"
            onClick={handleNextSlide}
          />
        )}
      </Flex>
    </Box>
  );
};

export default BannerSlider;
