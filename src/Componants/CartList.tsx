import { SimpleGrid } from "@chakra-ui/react";
import CartCard from "./CartCard";
const data = [
  {
    isNew: true,
    assured: false,
    imageURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "Wayfarer Classic",
    price: 100,
    rating: 2.5,
    numReviews: 99,
    id: 1,
    size: ["S", "M", "X", "XL", "XXL"],
  },
  {
    isNew: false,
    assured: true,
    imageURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "Wayfarer Classic",
    price: 8800,
    rating: 4.5,
    numReviews: 34,
    id: 2,
    size: ["S", "M", "X"],
  },
];

function CartList() {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3, xl: 3 }} spacing={10}>
      {data?.map((el) => (
        <CartCard key={el.id} {...el} />
      ))}
    </SimpleGrid>
  );
}

export default CartList;
