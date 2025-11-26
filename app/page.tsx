import Berita from "./newsi/page"
import Rumah from "./rumah/page";
export default function Home() {
  return (
    <div>
      <section id="rumah"><Rumah /></section>
      
      <div className="min-h-screen flex items-center justify-center w-full  ">
      <section id="berita"><Berita /></section>
      
      </div>
    </div>
  )
}
