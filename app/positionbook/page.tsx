import { ReactQueryPositionBook } from "@/components/react-query/reactquerypositionbook";

import Link from "next/link";
import React from "react";

function Positionbook() {
  return (
    <div className="min-h-screen ">
      <div className="flex justify-center mt-5">
        <Link href="/orderbook">
          <h1 className="text-2xl font-bold"> Go to Order Book</h1>
        </Link>
      </div>
      <ReactQueryPositionBook />
    </div>
  );
}

export default Positionbook;
