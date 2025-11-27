import Berita from "./newsi/page"
import Rumah from "./rumah/page";
export default function Home() {
  return (
    <div  className="bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564')] scroll-smooth">
        bg-cover bg-center bg-fixed
      <section id="rumah"><Rumah /></section>
      
      <div className="min-h-screen flex items-center justify-center w-full  ">
      <section id="berita"><Berita /></section>
      
      </div>
    </div>
  )
}
