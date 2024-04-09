import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { columns, data } from "@/helpers/AboutTableData";

export default function AboutTable() {
  return (
    <Table isStriped shadow="none" aria-label="About table with values">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.uid}>{column.name}</TableColumn>}
      </TableHeader>
      <TableBody items={data}>
        {(item: any) => (
          <TableRow key={`${item.value}-${item.behavior}`}>
            {(columnKey: any) => <TableCell>{item[columnKey]}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
