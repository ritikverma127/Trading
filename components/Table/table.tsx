import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { OrderBook } from "@/Data/OrderBook";
export function TableOrder() {
  // console.log(data);
  // console.log(OrderBook[0].AppOrderID);

  // const strategy = [
  //   "NDWA_ROLLING",
  //   "NDWA_M_2 ",
  //   "NDWA_M_-2",
  //   "KT_STRADDLE_M2",
  //   "KT_STRADDLE_M-2",
  //   "KT_C_ITM-1min",
  //   "KT_C_HEDGE-1min ",
  //   "KT_P_ITM-1min",
  //   "KT_P_HEDGE-1min",
  // ];

  return (
    <>
      {/* {OrderBook.OrderUniqueIdentifier == strategy && */}
      {OrderBook?.map((item, index) => (
        <Table className="border-2" key={index}>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">OrderUniqueIdentifier</TableHead>
              <TableHead>TradingSymbol</TableHead>
              <TableHead>AppOrderID</TableHead>
              <TableHead>ExchangeOrderID</TableHead>
              <TableHead>ExchangeInstrumentID</TableHead>
              <TableHead>OrderSide</TableHead>
              <TableHead>OrderType</TableHead>
              <TableHead>ProductType</TableHead>
              <TableHead>OrderQuantity</TableHead>
              <TableHead>OrderStatus</TableHead>
              <TableHead>OrderAverageTradedPrice</TableHead>
              <TableHead>OrderGeneratedDateTime</TableHead>
              <TableHead>ExchangeTransactTime</TableHead>
              <TableHead>OrderLegStatus</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>{item.OrderUniqueIdentifier}</TableCell>
              <TableCell>{item.TradingSymbol}</TableCell>
              <TableCell>{item.AppOrderID}</TableCell>
              <TableCell>{item.ExchangeOrderID}</TableCell>
              <TableCell>{item.ExchangeInstrumentID}</TableCell>
              <TableCell>{item.OrderSide}</TableCell>
              <TableCell>{item.OrderType}</TableCell>
              <TableCell>{item.ProductType}</TableCell>
              <TableCell>{item.OrderQuantity}</TableCell>
              <TableCell>{item.OrderStatus}</TableCell>
              <TableCell>{item.OrderAverageTradedPrice}</TableCell>
              <TableCell>{item.OrderGeneratedDateTime}</TableCell>
              <TableCell>{item.ExchangeTransactTime}</TableCell>
              <TableCell>{item.OrderLegStatus}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ))}
    </>
  );
}
