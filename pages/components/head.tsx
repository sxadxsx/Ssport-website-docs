import { Navbar } from "flowbite-react";
import React from 'react';
import Link from 'next/link';
import { Collapse } from "flowbite";
import type { CollapseOptions, CollapseInterface } from "flowbite";

function head() {
  return (
  <div>
<Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand
    as={{
      $$typeof: Symbol(react.forward_ref),
      render: LinkWithRef
    }}
    <Link href="/">Home</Link>
  >
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
      active={true}
    >
      Home
    </Navbar.Link>
    <Navbar.Link
      as={{
        $$typeof: Symbol(react.forward_ref),
        render: LinkWithRef
      }}
      to="/navbars"
    >
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
  )
}

export default head;
