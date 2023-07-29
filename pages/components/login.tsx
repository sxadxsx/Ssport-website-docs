import { signIn, signOut, useSession } from "next-auth/react"
import React from 'react';
import { Button } from "flowbite-react";
export default function Login() {
const { data: session, status } = useSession();
if (session) {
return (
<>

<Button>         <a 
                 href={`/api/auth/signout`} 
                 onClick={(e) => { 
                   e.preventDefault() 
                   signOut() 
                 }} 
               > 
                 登出
               </a>
</Button>
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