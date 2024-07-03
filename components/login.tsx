'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { DialogCloseButton } from "./viewtoken"
import 'dotenv/config'
interface User {
    username: string
    password: string
}

interface Token {
    message: string
    token: string
}

export function LoginForm({ url_api } : any) {
 
    const [dataUser,setDataUser] = useState<User>({ username: '', password: '' });
    const [token,setToken] = useState<Token>({message: '',token: ''});

    const handleSubmit = async () =>{

        const data = await (await fetch(url_api, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataUser)
        })).json();

        setDataUser({ username: '', password: '' });
        setToken(data)

        console.log(data);

    }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your username below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="username">Username</Label>
          <Input onChange={(e) => setDataUser({...dataUser,username:e.target.value})} id="email" type="email" placeholder="example166" required value={dataUser.username}/>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input onChange={(e) => setDataUser({...dataUser,password:e.target.value})} id="password" type="password" required value={dataUser.password}/>
        </div>
      </CardContent>
      <CardFooter>
       <DialogCloseButton handleSubmit={handleSubmit} tokenUser={token} dataUser={dataUser}></DialogCloseButton>
      </CardFooter>
    </Card>
  )
}
