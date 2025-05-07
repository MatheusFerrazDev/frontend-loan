import { DollarSign } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function TotalValueReturned() {
  return (
    <Card>
      <CardHeader className="flex flex-row space-y-0 items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">
          Total Devolvido(mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">R$ 5.000,00</span>
        <p className="text-xs text-muted-foreground pt-2">
          <span className="text-emerald-500 dark:text-emerald-400">+10%</span>{" "}
          em relação ao mês passado
        </p>
      </CardContent>
    </Card>
  );
}
