import Image from "next/image";
import Header from "@/Components/Header/Header";
import Body from "@/Components/Body/page";
import Footer from "@/Components/Footer/page";

export default function Home() {
  return (

    <div className="h-screen">

      <div className="">
        <Header/>
      </div>

      <br />
      <br />

      <div>
        <Body/>
      </div>

      <br />
      <br />

      <div className="">
        <Footer/>
      </div>

    </div>
  );
}
