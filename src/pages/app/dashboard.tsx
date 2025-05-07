import { Helmet } from "react-helmet-async";

import { AnnualChart } from "@/components/dashboard/annual-chart";
import { FinancialSummaryPie } from "@/components/dashboard/financial-sumary-pie";
import { PieData } from "@/components/dashboard/pie-chart";

import { MonthInterestCard } from "../../components/dashboard/month-interest-card";
import { TotalValueReturned } from "../../components/dashboard/month-returned-value";
import { TotalCash } from "../../components/dashboard/total-cash";
import { TotalLoansOfMonth } from "../../components/dashboard/total-loans-month";

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
        <div className="grid gap-4 md:grid-cols-3 md:gap-4">
          <AnnualChart />
          <PieData />
          <FinancialSummaryPie />
        </div>
      </div>
    </>
  );
}
