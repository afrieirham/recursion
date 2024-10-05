import { File, FolderIcon } from "lucide-react";
import { useState } from "react";

type Folder = {
  name: string;
  folders?: Folder[];
};

const folders = [
  {
    name: "src",
    folders: [
      {
        name: "public",
        folders: [{ name: "og.png" }, { name: "favicon.ico" }],
      },
      {
        name: "pages",
        folders: [
          { name: "index.tsx" },
          { name: "_app.tsx" },
          { name: "_document.tsx" },
        ],
      },
      {
        name: "components",
        folders: [
          {
            name: "ui",
            folders: [
              { name: "button.tsx" },
              { name: "checkboxes.tsx" },
              { name: "input.tsx" },
            ],
          },
        ],
      },
      {
        name: "styles",
        folders: [{ name: "globals.css" }],
      },
    ],
  },
  { name: ".env" },
  { name: ".env.example" },
  { name: "package.json" },
  { name: ".gitignore" },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-sm p-4">
      <ul className="my-1.5">
        {folders.map((folder) => (
          <Folder key={folder.name} folder={folder} />
        ))}
      </ul>
    </div>
  );
}

function Folder({ folder }: { folder: Folder }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="pl-6" key={folder.name}>
      <button
        className="my-1.5 flex items-center gap-1.5"
        onClick={() => setOpen(!open)}
      >
        {folder.folders ? (
          open ? (
            <FolderOpenIcon className="size-6 text-sky-500" />
          ) : (
            <FolderIcon className="size-6 text-sky-500" />
          )
        ) : (
          <File className="size-6 text-black" />
        )}
        {folder.name}
      </button>

      {open && folder.folders && (
        <ul className="my-1.5">
          {folder.folders.map((folder) => (
            <Folder key={folder.name} folder={folder} />
          ))}
        </ul>
      )}
    </div>
  );
}

function FolderOpenIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className=""
      width="44"
      height="44"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2" />
    </svg>
  );
}
