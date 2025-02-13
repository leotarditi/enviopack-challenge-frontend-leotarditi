import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchProducts } from "../services/products"

export const useProducts = () => {
  const { isLoading, isError, data, refetch, fetchNextPage, hasNextPage } =
    useInfiniteQuery(["products"], fetchProducts, {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 3,
    })

  return {
    refetch,
    fetchNextPage,
    isLoading,
    isError,
    products: data?.pages.flatMap((page) => page.products) ?? [],
    hasNextPage,
  }
}
