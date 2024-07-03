import Avat from "@/components/avat";
import { LoginForm } from "@/components/login";
import { ModeToggle } from "@/components/toggle";
import "@/app/bg.css"


export default function Home() {
  
  const URL_API = process.env.URL_API; 

  return (
    <section className="relative h-screen w-full justify-center flex items-center mi-section">
      <Avat></Avat>
      <ModeToggle></ModeToggle>
      <LoginForm url_api={URL_API}></LoginForm>
    </section>
  );
}
