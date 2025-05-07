import { TrendingDown, TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const juros = 7500;
const quitacoes = 5000;
const saidas = 5000;

const totalPositivo = juros + quitacoes;
const saldoFinal = totalPositivo - saidas;

const pieChartData = [
  { status: "Entradas", value: totalPositivo, fill: "var(--color-chart-2)" },
  { status: "Saídas", value: saidas, fill: "var(--color-chart-5)" },
];

export function FinancialSummaryPie() {
  const isLucro = saldoFinal >= 0;

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Resumo Financeiro</CardTitle>
        <CardDescription>Entradas, Quitações e Saídas</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex md:pt-15">
        <ChartContainer
          className="mx-auto aspect-square max-h-[250px]"
          config={{}}
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent />} />
            <Pie
              data={pieChartData}
              dataKey="value"
              nameKey="status"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (!viewBox || !("cx" in viewBox) || !("cy" in viewBox))
                    return null;

                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-3xl font-bold"
                      >
                        R$ {Math.abs(saldoFinal).toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy ?? 0) + 24}
                        className="fill-muted-foreground"
                      >
                        {isLucro ? "Lucro" : "Prejuízo"}
                      </tspan>
                    </text>
                  );
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          {isLucro ? "Lucro de" : "Prejuízo de"}{" "}
          <span className={isLucro ? "text-emerald-500" : "text-red-500"}>
            R$ {Math.abs(saldoFinal).toLocaleString()}
          </span>
          {isLucro ? (
            <TrendingUp className="h-4 w-4" />
          ) : (
            <TrendingDown className="h-4 w-4" />
          )}
        </div>
        <div className="leading-none text-muted-foreground">
          Baseado nas movimentações do mês atual.
        </div>
      </CardFooter>
    </Card>
  );
}
