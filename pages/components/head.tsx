import { Navbar } from "flowbite-react";
import React from 'react';
import Link from 'next/link';

function head() {
  return (
  <div>
<Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand>
  <Link href="/"></Link>
    <img
      src="https://i.imgur.com/GhQm5zm.png"
      className="mr-3 h-6 sm:h-9"
      alt="ssport Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Link
      href="/navbars"
    >
      Home
    </Link>
    <Navbar.Link>
      About
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Services
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Pricing
    </Navbar.Link>
   <Link href="/c" legacyBehavior>
      聯繫
    </Link>
  </Navbar.Collapse>
</Navbar>
</div>
  )
}

export default head;
