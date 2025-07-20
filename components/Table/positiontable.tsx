import { PositionBook } from "@/Data/PositionBook";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function PositionTableDemo() {
  // console.log(data);
  // console.log(PositionBook[0].result.positionList);

  return (
    <Table className="border-2">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">TradingSymbol</TableHead>
          <TableHead>ExchangeInstrumentId</TableHead>
          <TableHead>ProductType</TableHead>
          <TableHead>Marketlot</TableHead>
          <TableHead>Multiplier</TableHead>
          <TableHead>OpenBuyQuantity</TableHead>
          <TableHead>OpenSellQuantity</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>SumOfTradedQuantityAndPriceBuy</TableHead>
          <TableHead>SumOfTradedQuantityAndPriceSell</TableHead>
          <TableHead>IsInterOpPosition</TableHead>
          <TableHead>ActualSellAmount</TableHead>
          <TableHead>ActualSellAveragePrice</TableHead>
          <TableHead>ActualBuyAmount</TableHead>
          <TableHead>ActualBuyAveragePrice</TableHead>
          <TableHead>SumOfTradedQuantityAndActualPriceBuy</TableHead>
          <TableHead>SumOfTradedQuantityAndActualPriceSell</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {PositionBook[0].result.positionList?.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.TradingSymbol}</TableCell>
            <TableCell>{item.ExchangeInstrumentId}</TableCell>
            <TableCell>{item.ProductType}</TableCell>
            <TableCell>{item.Marketlot}</TableCell>
            <TableCell>{item.Multiplier}</TableCell>
            <TableCell>{item.OpenBuyQuantity}</TableCell>
            <TableCell>{item.Quantity}</TableCell>
            <TableCell>{item.ProductType}</TableCell>
            <TableCell>{item.SumOfTradedQuantityAndPriceBuy}</TableCell>
            <TableCell>{item.SumOfTradedQuantityAndPriceSell}</TableCell>
            <TableCell>{item.IsInterOpPosition}</TableCell>
            <TableCell>{item.ActualSellAmount}</TableCell>
            <TableCell>{item.ActualSellAveragePrice}</TableCell>
            <TableCell>{item.ActualBuyAmount}</TableCell>
            <TableCell>{item.ActualBuyAveragePrice}</TableCell>
            <TableCell>{item.SumOfTradedQuantityAndActualPriceBuy}</TableCell>
            <TableCell>{item.SumOfTradedQuantityAndActualPriceSell}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
