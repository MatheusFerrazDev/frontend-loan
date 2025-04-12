import { Helmet } from "react-helmet-async";

import { MonthInterestCard } from "./month-interest-card";
import { TotalValueReturned } from "./month-returned-value";
import { TotalCash } from "./total-cash";
import { TotalLoansOfMonth } from "./total-loans-month";

export function Dashboard() {
  return (
    <>
      <Helmet>
        <title>DashBoard</title>
      </Helmet>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          Dashboard
        </h1>

        <div className="grid gap-4 md:grid-cols-4 md:gap-4">
          <MonthInterestCard />
          <TotalLoansOfMonth />
          <TotalValueReturned />
          <TotalCash />
        </div>
      </div>
    </>
  );
}
