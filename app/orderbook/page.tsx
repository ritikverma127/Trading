import { ReactQueryOrderBook } from "@/components/react-query/reactqueryorderbook";

import Link from "next/link";
import React from "react";

function Orderbook() {
  return (
    <div className="min-h-screen ">
      <div className="flex justify-center mt-5">
        <Link href="/positionbook">
          <h1 className="text-2xl font-bold">Go to Postion Book</h1>
        </Link>
      </div>

      <ReactQueryOrderBook />
    </div>
  );
}

export default Orderbook;
