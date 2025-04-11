import { Helmet } from "react-helmet-async";

import { Pagination } from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ClientTableFilters } from "./client-table-filters";
import { ClientsTableRow } from "./clients-table-row";

export function Clients() {
  return (
    <>
      <Helmet title="Clientes" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Clientes</h1>
      </div>
      <div className="space-y2.5">
        <ClientTableFilters />
      </div>
      <div className="border rounded-md ">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="md:w-[64px]"></TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Mensalidade</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Pagamento</TableHead>
              <TableHead className="w-[164px]">Editar</TableHead>
              <TableHead className="w-[132px]">Excluir</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, i) => (
              <ClientsTableRow key={i} />
            ))}
          </TableBody>
        </Table>
      </div>
      <Pagination pageIndex={0} totalCount={105} perPage={10} />
    </>
  );
}
