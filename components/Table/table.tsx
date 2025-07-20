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

  return (
    <Table className="border-2">
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
        {OrderBook?.map((item, index) => (
          <TableRow key={index}>
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
        ))}
      </TableBody>
    </Table>
  );
}
