import Link from "next/link";

export default function Header() {
  return (
    <header className=" bg-rose-500 text-white text-center mb-3">
      <h1 className="font-bold">Checkpoint : frontend</h1>
      <Link href="/">Countries</Link>
    </header>
  );
}
