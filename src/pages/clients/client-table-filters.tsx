import { Search, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ClientTableFilters() {
  return (
    <>
      <div className="flex items-center pb-2">
        <span className="text-sm font-semibold">Filtros:</span>
      </div>

      <form className="flex flex-wrap gap-2 md:gap-2">
        <Input
          placeholder="Nome do cliente"
          className="order-1 text-xs w-[150px] md:h-8 md:w-[320px]"
        />
        <Input
          placeholder="Data de vencimento"
          className="order-2 text-xs w-[150px] md:h-8 md:w-[320px]"
        />
        <Select defaultValue="all">
          <SelectTrigger
            size="sm"
            className="order-5 md:order-3 text-xs md:w-[150px]"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem className="text-xs" value="all">
              Todos
            </SelectItem>
            <SelectItem className="text-xs" value="debtor">
              Atrasado
            </SelectItem>
            <SelectItem className="text-xs" value="paid">
              Pago
            </SelectItem>
          </SelectContent>
        </Select>

        <Button
          className="font-normal text-xs order-3 md:oder-4 items-center"
          variant="secondary"
          size="xs"
          type="submit"
        >
          <Search className="h-4 w-4" />
          Filtrar Resultados
        </Button>
        <Button
          className="font-normal text-xs order-4 md:order-5items-center"
          variant="outline"
          size="xs"
          type="button"
        >
          <X className="h-4 w-4" />
          Remover filtros
        </Button>
      </form>
    </>
  );
}
