'use client'
import { Copy,Check  } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {  useState } from "react"
import { AlertDestructive } from "./alerterror"

export function DialogCloseButton({ handleSubmit,dataUser,tokenUser } : any) {

    const [check,setCheck] = useState<boolean>(true);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full" onClick={()=> handleSubmit()} disabled={dataUser.username == "" || dataUser.password == ""? true : false}>{dataUser.username == "" || dataUser.password == ""? "Rellena los campos" : "Sign in"}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Get Token</DialogTitle>
          <DialogDescription>
            Copia el Token para acceder a los endpoints de la API.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          {tokenUser.error != null? <AlertDestructive message={tokenUser.message} error={tokenUser.error}></AlertDestructive> :
            <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            {
                tokenUser.token == "" || tokenUser.token == null? <p className="text-lg text-center">Cargando informacion ...</p> : (<Input
                id="link"
                defaultValue={tokenUser.token}
                readOnly
              />
              )
            }
          </div>
          }
          
          {
            tokenUser.token && <Toggle type="submit" size="sm" className="px-3" onClick={()=> {
                  navigator.clipboard.writeText(tokenUser.token)
                  setCheck(!check)
                }}>
                <span className="sr-only">Copy</span>
                {
                    check? <Copy className="h-4 w-4" /> : <Check></Check>
                }
              </Toggle>
          }
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
