import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const exhibitions = [
  {
    id: "EX001",
    title: "Art of the 20th Century",
    startDate: "2023-12-01",
    endDate: "2023-12-01",
    location: "Modern Art Gallery",
    description :"Lorem ipsum dolor sit amet, consectetur adip id ",
    image: "/img/400px.png", // Gambar pameran
  },
  {
    id: "EX002",
    title: "Renaissance Wonders",
    startDate: "2024-01-15",
    endDate: "2024-01-15",
    location: "Historical Museum",
    description :"Lorem ipsum dolor sit amet, consectetur adip id ",
    image: "/img/400px.png",
  },
  {
    id: "EX003",
    title: "Abstract Expressions",
    startDate: "2023-11-10",
    endDate: "2023-11-10",
    location: "Contemporary Space",
    description :"Lorem ipsum dolor sit amet, consectetur adip id ",
    image: "/img/400px.png",
  },
  {
    id: "EX004",
    title: "Photography Today",
    startDate: "2024-02-20",
    endDate: "2024-02-20",
    location: "Photography Studio",
    description :"Lorem ipsum dolor sit amet, consectetur adip id ",
    image: "/img/400px.png",
  },
];

export function DataExhibition() {
  const currentDate = new Date();

  const getStatus = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start > currentDate) {
      return "Upcoming";
    } else if (end < currentDate) {
      return "Completed";
    } else {
      return "Ongoing";
    }
  };

  return (
    <Table>
      <TableCaption>A list of exhibitions and their details.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[120px]">Image</TableHead>
          <TableHead>ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Start Date</TableHead>
          <TableHead>End Date</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {exhibitions.map((exhibition) => (
          <TableRow key={exhibition.id}>
            <TableCell>
              <img
                src={exhibition.image}
                alt={exhibition.title}
                className="w-20 h-20 object-cover rounded"
              />
            </TableCell>
            <TableCell className="font-medium">{exhibition.id}</TableCell>
            <TableCell>{exhibition.title}</TableCell>
            <TableCell>{exhibition.startDate}</TableCell>
            <TableCell>{exhibition.endDate}</TableCell>
            <TableCell>{exhibition.location}</TableCell>
            <TableCell>{exhibition.description}</TableCell>
            <TableCell>{getStatus(exhibition.startDate, exhibition.endDate)}</TableCell>
            <TableCell className="text-right">
              <Button
                className="px-2 py-1 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => alert(`Editing exhibition: ${exhibition.title}`)}
              >
                Edit
              </Button>
              <Button
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => alert(`Deleting exhibition: ${exhibition.title}`)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={7}>Total Exhibitions: {exhibitions.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
