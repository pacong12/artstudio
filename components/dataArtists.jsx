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
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const initialArtists = [
  {
    id: "ART001",
    name: "Leonardo da Vinci",
    description: "Renaissance",
    country: "Italy",
    birth: "1452-04-15",
    image: "/img/400px.png",
  },
  {
    id: "ART002",
    name: "Vincent van Gogh",
    description: "Post-Impressionism",
    country: "Netherlands",
    birth: "1853-03-30",
    image: "/img/400px.png",
  },
  {
    id: "ART003",
    name: "Frida Kahlo",
    description: "Surrealism",
    country: "Mexico",
    birth: "1907-07-06",
    image: "/img/400px.png",
  },
  {
    id: "ART004",
    name: "Pablo Picasso",
    description: "Cubism",
    country: "Spain",
    birth: "1881-10-25",
    image: "/img/400px.png",
  },
];

export function DataArtist() {
  const [artists, setArtists] = useState(initialArtists);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [newArtist, setNewArtist] = useState({
    id: "",
    name: "",
    description: "",
    country: "",
    birth: "",
    image: "/img/400px.png",
  });

  const [editingArtist, setEditingArtist] = useState({
    id: "",
    name: "",
    description: "",
    country: "",
    birth: "",
    image: "/img/400px.png",
  });

  const handleAddArtist = () => {
    setArtists((prevArtists) => [
      ...prevArtists,
      { ...newArtist, id: `ART00${prevArtists.length + 1}` },
    ]);
    setOpenAddModal(false);
    setNewArtist({
      id: "",
      name: "",
      description: "",
      country: "",
      birth: "",
      image: "/img/400px.png",
    });
  };

  const handleEditArtist = () => {
    setArtists((prevArtists) =>
      prevArtists.map((artist) =>
        artist.id === editingArtist.id ? editingArtist : artist
      )
    );
    setOpenEditModal(false);
    setEditingArtist({
      id: "",
      name: "",
      description: "",
      country: "",
      birth: "",
      image: "/img/400px.png",
    });
  };

  return (
    <div>
      <Button
        className="mb-4 bg-green-500 text-white rounded hover:bg-green-600"
        onClick={() => setOpenAddModal(true)}
      >
        Add Artist
      </Button>

      <Table>
        <TableCaption>A list of artists and their details.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px]">Image</TableHead>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Country</TableHead>
            <TableHead>Birth Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {artists.map((artist) => (
            <TableRow key={artist.id}>
              <TableCell>
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-20 h-20 object-cover rounded"
                />
              </TableCell>
              <TableCell className="font-medium">{artist.id}</TableCell>
              <TableCell>{artist.name}</TableCell>
              <TableCell>{artist.description}</TableCell>
              <TableCell>{artist.country}</TableCell>
              <TableCell>{artist.birth}</TableCell>
              <TableCell className="text-right">
                <Button
                  className="px-2 py-1 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={() => {
                    setEditingArtist(artist);
                    setOpenEditModal(true);
                  }}
                >
                  Edit
                </Button>
                <Button
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => alert(`Deleting artist: ${artist.name}`)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={7}>Total Artists: {artists.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      {/* Add Artist Modal */}
      <Dialog open={openAddModal} onOpenChange={setOpenAddModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Artist</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              placeholder="Name"
              value={newArtist.name}
              onChange={(e) =>
                setNewArtist({ ...newArtist, name: e.target.value })
              }
            />
            <Input
              placeholder="Description"
              value={newArtist.description}
              onChange={(e) =>
                setNewArtist({ ...newArtist, description: e.target.value })
              }
            />
            <Input
              placeholder="Country"
              value={newArtist.country}
              onChange={(e) =>
                setNewArtist({ ...newArtist, country: e.target.value })
              }
            />
            <Input
              placeholder="Birth Date (YYYY-MM-DD)"
              value={newArtist.birth}
              onChange={(e) =>
                setNewArtist({ ...newArtist, birth: e.target.value })
              }
            />
          </div>
          <DialogFooter>
            <Button
              onClick={handleAddArtist}
              className="bg-green-500 text-white rounded hover:bg-green-600"
            >
              Add Artist
            </Button>
            <DialogClose asChild>
              <Button
                variant="outline"
                className="ml-2 text-red-500 hover:text-red-600"
              >
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Artist Modal */}
      <Dialog open={openEditModal} onOpenChange={setOpenEditModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Artist</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              placeholder="Name"
              value={editingArtist.name}
              onChange={(e) =>
                setEditingArtist({ ...editingArtist, name: e.target.value })
              }
            />
            <Input
              placeholder="Description"
              value={editingArtist.description}
              onChange={(e) =>
                setEditingArtist({
                  ...editingArtist,
                  description: e.target.value,
                })
              }
            />
            <Input
              placeholder="Country"
              value={editingArtist.country}
              onChange={(e) =>
                setEditingArtist({ ...editingArtist, country: e.target.value })
              }
            />
            <Input
              placeholder="Birth Date (YYYY-MM-DD)"
              value={editingArtist.birth}
              onChange={(e) =>
                setEditingArtist({ ...editingArtist, birth: e.target.value })
              }
            />
          </div>
          <DialogFooter>
            <Button
              onClick={handleEditArtist}
              className="bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Save Changes
            </Button>
            <DialogClose asChild>
              <Button
                variant="outline"
                className="ml-2 text-red-500 hover:text-red-600"
              >
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
