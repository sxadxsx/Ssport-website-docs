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
<Dropdown inline label={<Avatar alt="User settings" img="https://th.bing.com/th/id/OIG.3ATeLzhfld0KGXFir2Vh?w=173&h=173&c=6&r=0&o=5&dpr=2.8&pid=ImgGn" rounded/>} > <Dropdown.Header> <span className="block text-sm"> {session.user.name}  </span> <span className="block truncate text-sm font-medium"> {session.user.email} </span> </Dropdown.Header> <div> Dashboard </div> <div> Settings </div> <div> Earnings </div> <Dropdown.Divider /> <div> <a 
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