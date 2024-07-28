import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import React from "react";


const rows = [
  {
    key: "1",
    date: "01/01/2024",
    bill: "01234",
    name: "Tony Reichert",
    quantitywater: "100",
    quantitycoolcloth: "100",
    status: "Customers",
    package: "All Game Pass",
    note: "Test",
    


  },
  {
    key: "2",
    date: "01/01/2024",
    bill: "01234",
    name: "Zoey Lang",
    quantitywater: "100",
    quantitycoolcloth: "100",
    status: "Customers",
    package: "All Game Pass",
    note: "Test",
  },
  {
    key: "3",
    date: "01/01/2024",
    bill: "01234",
    name: "Jane Fisher",
    quantitywater: "100",
    quantitycoolcloth: "100",
    status: "Customers",
    package: "All Game Pass",
    note: "Test",
  },
  {
    key: "4",
    date: "01/01/2024",
    bill: "01234",
    name: "William Howard",
    quantitywater: "100",
    quantitycoolcloth: "100",
    status: "Customers",
    package: "All Game Pass",
    note: "Test",
  },
];

const columns = [
  {
    key: "date",
    label: "DATE",
  },
  {
    key: "bill",
    label: "BILL",
  },
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "quantitywater",
    label: "QUANTITY WATER",
  },
  {
    key: "quantitycoolcloth",
    label: "QUANTITY COOL CLOTH",
  },
  {
    key: "status",
    label: "STATUS",
  },
  {
    key: "package",
    label: "PACKAGE",
  },
  {
    key: "note",
    label: "NOTE",
  },
];

export default function Tablewater() {
  return (
    <Table aria-label="Example table with dynamic content"  >
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