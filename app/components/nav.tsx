import Link from "next/link";
import Image from "next/image";

import Logo from "./logo.png";

export default function Nav() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="bug tracker logo"
        width={80}
        placeholder="blur"
        quality={100}
      />
      <h1>Bug Tracker</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
      <Link href="/tickets/new">Create New</Link>
    </nav>
  );
}
