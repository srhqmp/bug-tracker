import Link from "next/link";
import Image from "next/image";

import Logo from "./logo.png";

export default function Nav() {
  return (
    <main>
      <nav>
        <Image
          src={Logo}
          alt="bug tracker logo"
          width={50}
          placeholder="blur"
          quality={100}
          className="mr-2"
        />
        <h2 className="hidden sm:block">Bug Tracker</h2>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
        <Link href="/tickets/new">Create New</Link>
      </nav>
    </main>
  );
}
