'use client';
import { signIn, signOut, useSession } from "next-auth/react"
import React from 'react';
import { Button } from "flowbite-react";
import { Dropdown, Navbar, Avatar } from 'flowbite-react';
export default function Login() {
const { data: session, status } = useSession();
if (session) {
return (
<>
<Dropdown inline label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded/>} > <Dropdown.Header> <span className="block text-sm"> Bonnie Green </span> <span className="block truncate text-sm font-medium"> {session.user.email} </span> </Dropdown.Header> <div> Dashboard </div> <div> Settings </div> <div> Earnings </div> <Dropdown.Divider /> <div> <a 
                 href={`/api/auth/signout`} 
                 onClick={(e) => { 
                   e.preventDefault() 
                   signOut() 
                 }} 
               > 
                 登出
               </a> </div> </Dropdown>
</>
)
}
return (
<>
<Button> 
  <a 
                 href={`/api/auth/signin`} 
                 onClick={(e) => { 
                   e.preventDefault() 
                   signIn() 
                 }} 
               > 
                 登入
               </a></Button>
</>
)
}