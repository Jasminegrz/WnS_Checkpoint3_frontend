import Link from "next/link";

export default function Header() {
  return (
    <header className="header bg-rose-500 text-white text-center">
      <h1 className="font-bold">Checkpoint : frontend</h1>
      <Link href="/">Countries</Link>
    </header>
  );
}
