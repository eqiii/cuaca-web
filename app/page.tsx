import Berita from "./newsi"
import Rumah from "./rumah";
export default function Home() {
  return (
    <div>
      <Rumah />
      <div className="min-h-screen flex items-center justify-center w-full  ">
      <Berita />
      </div>
    </div>
  )
}
