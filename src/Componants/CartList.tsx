import { SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

// import { getData } from "../Redux/Product/action";
import ProductError from "./ProductError";
import CartCard from "./CartCard";
import { getProducts } from "../Redux/Product/product.action";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import { useSearchParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

function CartList() {
  const { loading, error, data } = useAppSelector(
    (store: any) => store.ProuductReducer
  );
  console.log(loading, error, data);
  const dispatch: any = useAppDispatch();
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  interface MyObject {
    params: {
      category: string[];
      gender: string[];
      _sort?: string | null;
      _order?: string | null;
      _page?: number;
      _limit: number;
    };
  }

  const obj: MyObject = {
    params: {
      category: searchParams.getAll("category"),
      gender: searchParams.getAll("gender"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
      _page: page + 1,
      _limit: 15,
    },
  };
  const fetchData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    dispatch(getProducts(obj));
  }, [searchParams, page]);
  return (
    <>
      {/* {loading ? (
      // <ProductError />
      ) : error ? (
        // <ProductError />
      ) : ( */}
      <InfiniteScroll
        dataLength={data.length}
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 2, lg: 3, xl: 3 }}
          spacing={5}>
          {data?.map((el: any) => (
            <CartCard key={el.id} {...el} />
          ))}
        </SimpleGrid>
      </InfiniteScroll>
      {/* )} */}
    </>
  );
}

export default CartList;
