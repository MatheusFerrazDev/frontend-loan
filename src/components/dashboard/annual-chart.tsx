import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "Janeiro", entry: 5000, exit: 2000 },
  { month: "Fevereiro", entry: 7000, exit: 3500 },
  { month: "Março", entry: 6000, exit: 12000 },
  { month: "Abril", entry: 15000, exit: 8000 },
  { month: "Maio", entry: 20000, exit: 10000 },
  { month: "Junho", entry: 30000, exit: 20000 },
  { month: "Julho", entry: 60000, exit: 30000 },
  { month: "Agosto", entry: 50000, exit: 20000 },
  { month: "Setembro", entry: 80000, exit: 30000 },
  { month: "Outubro", entry: 100000, exit: 40000 },
  { month: "Novembro", entry: 110000, exit: 100000 },
  { month: "Dezembro", entry: 100000, exit: 80000 },
];

const chartConfig = {
  entry: {
    label: "Entrada",
  },
  exit: {
    label: "Saída",
  },
} satisfies ChartConfig;

export function AnnualChart() {
  const totalEntry = chartData.reduce((acc, curr) => acc + curr.entry, 0);
  const totalExit = chartData.reduce((acc, curr) => acc + curr.exit, 0);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Desempenho Anual</CardTitle>
        <CardDescription>Janeiro - Dezembro 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis tickFormatter={(value) => value.toLocaleString()} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="entry" fill="var(--color-chart-2)" radius={4} />
            <Bar dataKey="exit" fill="var(--color-chart-5)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Total de Entrada:{" "}
          <span className="dark:text-emerald-400 text-emerald-500">
            {totalEntry.toLocaleString()}
          </span>
        </div>
        <div className="flex gap-2 font-medium leading-none">
          Total de Saída:{" "}
          <span className="dark:text-red-400 text-red-500">
            {totalExit.toLocaleString()}
          </span>
        </div>
        <div className="leading-none text-muted-foreground">
          Mostrando total de entradas e saídas do último ano.
        </div>
      </CardFooter>
    </Card>
  );
}
