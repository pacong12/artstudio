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
  
  const catalogs = [
    {
      id: "CAT001",
      title: "Modern Art Collection",
      artist: "Art",  
      year: 2023,
      description: "A stunning piece that explores the boundaries of modern art.",
      image: "/img/400px.png", // Gambar katalog
    },
    {
      id: "CAT002",
      title: "Historical Artifacts",
      artist: "History",
      year: 2020,
      description: "A stunning piece that explores the boundaries of modern art.",
      image: "/img/400px.png",
    },
    {
      id: "CAT003",
      title: "Photography Archive",
      artist: "Photography",
      year: 2001,
      description: "A stunning piece that explores the boundaries of modern art.",
      image: "/img/400px.png",
    },
    {
      id: "CAT004",
      title: "Renaissance Paintings",
      artist: "Art",
      year: 2021,
      description: "A stunning piece that explores the boundaries of modern art.",
      image: "/img/400px.png",
    },
  ];
  
  export function DataCatalog() {
    return (
      <Table>
        <TableCaption>A list of catalogs and their details.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px]">Image</TableHead>
            <TableHead>ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Artist</TableHead>
            <TableHead>Year</TableHead>
            <TableHead>description</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {catalogs.map((catalog) => (
            <TableRow key={catalog.id}>
              <TableCell>
                <img
                  src={catalog.image}
                  alt={catalog.title}
                  className="w-20 h-20 object-cover rounded"
                />
              </TableCell>
              <TableCell className="font-medium">{catalog.id}</TableCell>
              <TableCell>{catalog.title}</TableCell>
              <TableCell>{catalog.artist}</TableCell>
              <TableCell>{catalog.year}</TableCell>
              <TableCell>{catalog.description}</TableCell>
              <TableCell className="text-right">
                <Button
                  className="px-2 py-1 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={() => alert(`Editing catalog: ${catalog.title}`)}
                >
                  Edit
                </Button>
                <Button
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => alert(`Deleting catalog: ${catalog.title}`)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={7}>Total Catalogs: {catalogs.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
  }
  