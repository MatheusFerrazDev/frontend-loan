import { Search, Trash2, UserCog } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";

export function ClientsTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Button variant="outline" size="xs">
          <Search className="h-3 w-3" />
        </Button>
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
