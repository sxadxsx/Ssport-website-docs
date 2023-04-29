import { Navbar } from "flowbite-react";
import React from 'react';
import Link from 'next/link';
import { Button } from "flowbite-react";
function head() {
  return (
    <header>
    <br />
  <Navbar
  fluid={true}
  rounded={true}
    className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
>
    <Link href="/">
    <img
      src="https://i.imgur.com/GhQm5zm.png"
      className="mr-3 h-6 sm:h-9"
      alt="ssport Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
    </span>
  </Link>
  <div className="flex md:order-2">
    <Button>
      Get started
    </Button>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      About
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Services
    </Navbar.Link>
    <Navbar.Link>
          <Link href="/blog">
      Blog
    </Link>
    </Navbar.Link>
    <Navbar.Link>
    <Link href="/c">
      聯繫
    </Link>
      </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
      </header>

  )
}

export default head;
