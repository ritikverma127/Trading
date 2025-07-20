// "use client";
// import { OrderBookDataFetch } from "@/app/orderbook/action";
// import { useQuery } from "@tanstack/react-query";
import { TableOrder } from "../Table/table";

export function ReactQueryOrderBook() {
  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ["OrderBookDataFetch"],
  //   queryFn: OrderBookDataFetch,
  //   refetchInterval: 1000,
  //   refetchIntervalInBackground: true,
  // });

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error fetching data</div>;

  return (
    <div>
      <TableOrder />
    </div>
  );
}
