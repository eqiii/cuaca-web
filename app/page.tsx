import Berita from "./newsi/page"
import Rumah from "./rumah/page";
import AboutPage from "./about/page";
export default function Home() {
  return (
    <div  className=" scroll-smooth bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564')]">
        bg-cover bg-center bg-fixed
      <section id="rumah">
        <div className="" ><Rumah /></div></section>
      <div className="min-h-screen flex items-center justify-center w-full bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564')] ">
        <section id="berita"><Berita /></section>
      </div>
      <div className="bg-black/60">
         <section id="about" className="bg-black/60"><AboutPage /></section>
      </div>
     
      
    </div>
  )
}
