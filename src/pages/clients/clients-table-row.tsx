import { Search, Trash2, UserCog } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";

import { ClientDetails } from "./client-details";

export function ClientsTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
            </Button>
          </DialogTrigger>
          <ClientDetails
            id={""}
            name={" "}
            email={""}
            cpf={""}
            phone={""}
            adress={""}
            value={0}
            loanInterest={0}
            installments={0}
            installmentsPaid={0}
            lateInstallments={0}
            valuePaid={0}
            monthlyPaid={0}
            loanDate={""}
            nextPaymentDate={""}
            lastPaymentDate={""}
            monthlyFeePaid={false}
            totalDebtPaid={false}
            observations={""}
          />
        </Dialog>
      </TableCell>
      <TableCell className="text-sm font-medium">Matheus Ferraz</TableCell>
      <TableCell>R$ 2500,00</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-rose-500"></span>
          <span className="font-medium text-muted-foreground">Atrasado</span>
        </div>
      </TableCell>
      <TableCell>08/04/2025</TableCell>
      <TableCell>
        <Button variant="outline" size="sm">
          <UserCog className="mr-1 h-3 w-3" />
          Editar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="sm">
          <Trash2 className="mr-1 h-3 w-3" />
          Excluir
        </Button>
      </TableCell>
    </TableRow>
  );
}
