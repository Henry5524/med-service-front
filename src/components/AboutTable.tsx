import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { AboutTableProps } from "@/types/aboutTypes";

export const columns = [
  { name: "Ценность", id: "value" },
  { name: "Поведение", id: "behavior" },
];

export default function AboutTable({ data }: { data: AboutTableProps[] }) {
  return (
    <>
      {data && (
        <Table isStriped shadow="none" aria-label="About table with values">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.id}>{column.name}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={data}>
            {(item: any) => (
              <TableRow key={`${item.id}-${item.value}`}>
                {(columnKey: any) => <TableCell>{item[columnKey]}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
    </>
  );
}
