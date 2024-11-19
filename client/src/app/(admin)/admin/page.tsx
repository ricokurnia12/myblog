import React from "react";
import TableComponent from "@/components/table/table-component";
import { title } from "process";
const page = () => {
  const articleColumn: any[] = [
    {
      accessorKey: "title",
      header: "Title",
      cell: (info: any) => {
        return <div className="">{info.row.original.title}</div>;
      },
    },
    {
      accessorKey: "date",
      header: "Date",
      cell: (info: any) => {
        return <div>{info.row.original.date}</div>;
      },
    },
  ];

  const dataSkills: any[] = [
    {
      title: "Cara menjalin hubungan dengan baik",
      date: "12 Juni 2024",
    },
    {
      title: "Lorem ipsum",
      date: "12 Maret 2024",
    },
  ];
  return (
    <div>
      ini admin
      <TableComponent data={dataSkills} columns={articleColumn} />
    </div>
  );
};

export default page;
