import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin,Github } from 'lucide-react';

export default function Avat() {
  return (
    <div className="flex justify-center items-center gap-x-5 absolute top-5 left-8">
    <a href="https://www.linkedin.com/in/lv-dev/" target="_blank"><Linkedin size={32}></Linkedin></a>
    <a href="https://veldev.vercel.app/" target="_blank">
        <Avatar className="w-10 h-10">
        <AvatarImage  src="https://raw.githubusercontent.com/LucianoVelasquez/portfolio/main/src/components/Hero/avatar3.png" />
        <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    </a>
    <a  href="https://github.com/LucianoVelasquez" target="_blank"><Github size={32}></Github></a>
    </div>   
    
  );
}
