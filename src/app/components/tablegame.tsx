import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import React from "react";


const rows = [
  {
    key: "1",
    datetime: "01/01/2024 00:00 h",
    bill: "01234",
    ticket: "Staff Zombie Azuwa",
    pax: "2",
    PURPOSE: "Play With Customers",
    reqested: "Customers",
    approved: "P.TAR",
    note: "Test",
    


  },
  {
    key: "2",
    datetime: "01/01/2024 00:00 h",
    bill: "01234",
    ticket: "Staff Zombie Jail",
    pax: "5",
    PURPOSE: "equipment Failure",
    reqested: "Customers",
    approved: "P.TAR",
    note: "Test",
  },
  {
    key: "3",
    datetime: "01/01/2024 00:00 h",
    bill: "01234",
    ticket: "Staff Zombie Jail2",
    pax: "5",
    PURPOSE: "5 Star Review",
    reqested: "Customers",
    approved: "P.TAR",
    note: "Test",
  },
  {
    key: "4",
    datetime: "01/01/2024 00:00 h",
    bill: "01234",
    ticket: "Staff Zombie Way",
    pax: "5",
    PURPOSE: "Events",
    reqested: "Customers",
    approved: "P.TAR",
    note: "Test",
  },
];

const columns = [
  {
    key: "datetime",
    label: "DATETIME",
  },
  {
    key: "bill",
    label: "BILL",
  },
  {
    key: "ticket",
    label: "TICKET DSPIRTION",
  },
  {
    key: "pax",
    label: "PAX",
  },
  {
    key: "PURPOSE",
    label: "details",
  },
  {
    key: "reqested",
    label: "REQESTED BY",
  },
  {
    key: "approved",
    label: "APPROVED BY",
  },
  {
    key: "note",
    label: "NOTE",
  },
];

export default function Gameticket() {
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