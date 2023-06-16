import React from 'react'
import BannerSlider from '../Componants/BannerSlider'
import Footer from '../Componants/Footer'
import Navbar from '../Componants/Navbar'
import { Box, Flex, Image, SimpleGrid, Text, Heading } from "@chakra-ui/react"
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import ProductSlider from '../Componants/ProductSlider'

let data = [
  {
    "name": "Veirdo - Green Cotton Regular Fit Men's T-Shirt ( Pack of 1 )",
    "price": 359,
    "rating": 4,
    "gender": "Mens",
    "category": "Top",
    "image": "https://n2.sdlcdn.com/imgs/k/e/u/Veirdo-100-Cotton-Regular-Fit-SDL302182620-1-f0fac.jpg",
    "id": 1
  },
  {
    "name": "GIYSI - Black Polyester Men's Trackpants ( Pack of 1 )",
    "price": 399,
    "rating": 4,
    "gender": "Mens",
    "category": "Bottom",
    "image": "https://n2.sdlcdn.com/imgs/k/j/s/GIYSI-Black-Polyester-Men-s-SDL982045463-1-1f0f7.jpg",
    "id": 2
  },
  {
    "name": "UrbanMark Men Casual Knitted Eva Slip-Ons Walking Sports Shoes- Dark Gray",
    "price": 399,
    "rating": 4.3,
    "gender": "Mens",
    "category": "Footware",
    "image": "https://n4.sdlcdn.com/imgs/k/n/s/UrbanMark-Men-Casual-Knitted-Eva-SDL436263890-1-e399c.jpg",
    "id": 3
  },
  {
    "name": "Mojua - Pink Cotton Boy's T-Shirt ( Pack of 2 )",
    "price": 519,
    "rating": 4.2,
    "gender": "Boys",
    "category": "Top",
    "image": "https://n2.sdlcdn.com/imgs/k/i/x/Mojua-Pink-Cotton-Boy-s-SDL647997574-1-9a8a6.jpg",
    "id": 4
  },
  {
    "name": "R K Maniyar - Green Rayon Girls Off Shoulder Dress ( Pack of 1 )",
    "price": 419,
    "rating": 4.2,
    "gender": "Girls",
    "category": "Dress",
    "image": "https://n2.sdlcdn.com/imgs/k/k/o/R-K-Maniyar-Green-Rayon-SDL586530189-1-28456.jpg",
    "id": 5
  },
  {
    "name": "DECLASSE - Black Silicon Analog Womens Watch",
    "price": 235,
    "rating": 4.3,
    "gender": "Womens",
    "category": "Accessories",
    "image": "https://n1.sdlcdn.com/imgs/j/p/v/DECLASSE-Silicon-Round-Womens-Watch-SDL451104748-1-03e62.jpeg",
    "id": 6
  },
  {
    "name": "vanraj Blue Net Saree -",
    "price": 625,
    "rating": 4.3,
    "gender": "Womens",
    "category": "Dress",
    "image": "https://n1.sdlcdn.com/imgs/k/d/3/vanraj-Blue-Net-Saree-SDL202573410-1-0b87c.jpg",
    "id": 7
  },
  {
    "name": "Neo Garments - Green Cotton Men's Shorts ( Pack of 1 )",
    "price": 339,
    "rating": 4.1,
    "gender": "Mens",
    "category": "Bottom",
    "image": "https://n2.sdlcdn.com/imgs/k/k/m/Neo-Garments-Green-Cotton-Men-SDL950310462-2-d4e3e.jpeg",
    "id": 8
  },
  {
    "name": "David Miller White Dial Tan Brown PU Strap Men's Watch - DMRCM4C",
    "price": 299,
    "rating": 2,
    "gender": "Mens",
    "category": "Accessories",
    "image": "https://n3.sdlcdn.com/imgs/j/p/k/David-Miller-White-Dial-Tan-SDL580697508-1-fe766.jpg",
    "id": 9
  },
  {
    "name": "SVARCHI - Green Cotton Women's Straight Kurti ( Pack of 1 )",
    "price": 539,
    "rating": 4,
    "gender": "Womens",
    "category": "Top",
    "image": "https://n1.sdlcdn.com/imgs/k/i/l/SVARCHI-Green-Cotton-Women-s-SDL629187261-1-4af13.jpg",
    "id": 10
  },
  {
    "name": "STANFIELD GIRLS UNIFORM SCHOOL ANKLE BELLY",
    "price": 219,
    "rating": 4.2,
    "gender": "Girls",
    "category": "Footware",
    "image": "https://n2.sdlcdn.com/imgs/k/j/c/STANFIELD-GIRLS-UNIFORM-SCHOOL-ANKLE-SDL034190311-1-230d8.jpg",
    "id": 11
  },
  {
    "name": "BUNNIES Latest Girl's LED Leight Shoes For ( 5 TO 13 Years )",
    "price": 449,
    "rating": 4.1,
    "gender": "Girls",
    "category": "Footware",
    "image": "https://n4.sdlcdn.com/imgs/j/u/o/BUNNIES-Latest-Girl-s-LED-SDL972433981-1-01137.jpg",
    "id": 12
  }
]
const Home = () => {
  const { section } = useParams();
  useEffect(() => {
    if (section !== undefined) {
      document.title = `ShopNow-${section}`
    }
    else {
      document.title = `ShopNow.com`
    }



  }, [section])
  return (
    <div style={{ width: "100%" }}>
      <Navbar />
      <div style={{ width: "100%" }}>
        <BannerSlider />
      </div>
      <Box fontFamily='Poppins,sans-serif' id='about-us' fontWeight='bold'  borderRadius="40px" paddingTop="8%" paddingLeft="2%" backgroundSize="100%" height="500px" backgroundImage="https://images.jdmagicbox.com/comp/bangalore/f9/080pxx80.xx80.180411134259.f2f9/catalogue/addict-clothing-co-apparels-bommanahalli-bangalore-readymade-garment-retailers-5i9rrtrghs.jpg?clr=" width="97%" margin="auto" marginBottom="30px">
        <Heading marginBottom="20px">About Us</Heading>
        <Text fontSize="20px" width="60%">THE SHOP NOW caters to thoughtful shoppers who appreciate unique designs and top quality pieces you just can’t find anywhere else. We are constantly curating fresh new collections and looking for the next big thing our customers will love. Founded in Vienna in 2019, we are proud to be your Online Clothing Shop that you can rely on for our expert service and care.</Text>
      </Box>
      <Box id='new-arrivals' width="92%" marginTop="30px" fontFamily='Poppins,sans-serif' letterSpacing="wide" fontWeight="bold" margin="auto">
        <Heading>2023 New Arrivals</Heading>
        <Flex marginTop="20px" marginBottom="30px">
          <SimpleGrid margin="auto" columns={[1,2,3,4]} gap="40px">
            {data?.map((ele) => {
              return (
                <Link to="#">
                  <Box textAlign="left" >
                    <Image borderRadius="30px" width="100%" border="1px solid lightgrey" src={`${ele.image}`}></Image>
                    <Text fontSize="15px" marginTop="10px">{ele.name}</Text>
                    <Text fontWeight="bold" color="#FA6F1E" marginTop="10px">${+ele.price.toFixed(2)}</Text>
                  </Box>
                </Link>
              )
            })}
          </SimpleGrid>
        </Flex>
      </Box>
      <ProductSlider/>
      <Footer />
    </div>
  )
}

export default Home