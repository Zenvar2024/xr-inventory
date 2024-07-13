import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import React from "react";


const rows = [
  {
    key: "1",
    date: "01/01/2024",
    name: "Zen",
    water: "15",
    coolcloth: "10",
    note: "Test",
    


  },
  {
    key: "2",
    date: "01/01/2024",
    name: "Zen",
    water: "0",
    coolcloth: "0",
    note: "Test",
  },
  {
    key: "3",
    date: "01/01/2024",
    name: "Zen",
    water: "0",
    coolcloth: "100",
    note: "Test",
  },
  {
    key: "4",
    date: "01/01/2024",
    name: "Zen",
    water: "100",
    coolcloth: "0",
    note: "Test",
  },
];

const columns = [
  {
    key: "date",
    label: "DATE",
  },
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "water",
    label: "WATER",
  },
  {
    key: "coolcloth",
    label: "COOL CLOTH",
  },
  {
    key: "note",
    label: "NOTE",
  },
];

export default function Tablestock() {
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn align="center" key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell  >{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}