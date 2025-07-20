"use client";
import { useQuery } from "@tanstack/react-query";

import { PositionTableDemo } from "../Table/positiontable";
import { PositionBookDataFetch } from "@/app/positionbook/action";

export function ReactQueryPositionBook() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["PositionBookDataFetch"],
    queryFn: PositionBookDataFetch,
    refetchInterval: 1000,
    refetchIntervalInBackground: true,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div>
      <PositionTableDemo data={data} />
    </div>
  );
}
