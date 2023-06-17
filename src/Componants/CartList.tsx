import { SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";

// import { getData } from "../Redux/Product/action";
import ProductError from "./ProductError";
import CartCard from "./CartCard";
import { getProducts } from "../Redux/Product/product.action";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import { useSearchParams } from "react-router-dom";

function CartList() {
  const { loading, error, data } = useAppSelector(
    (store: any) => store.ProuductReducer
  );
  console.log(loading, error, data);
  const dispatch: any = useAppDispatch();
  const [searchParams] = useSearchParams();

  interface MyObject {
    params: {
      category: string[];
      gender: string[];
      _sort?: string | null;
      _order?: string | null;
    };
  }

  const obj: MyObject = {
    params: {
      category: searchParams.getAll("category"),
      gender: searchParams.getAll("gender"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
    },
  };

  useEffect(() => {
    dispatch(getProducts(obj));
  }, [searchParams]);
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3, xl: 3 }} spacing={5}>
      {loading ? (
        <ProductError />
      ) : error ? (
        <ProductError />
      ) : (
        <>
          {data?.map((el: any) => (
            <CartCard key={el.id} {...el} />
          ))}
        </>
      )}
    </SimpleGrid>
  );
}

export default CartList;
