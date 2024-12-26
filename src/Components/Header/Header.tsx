import Home from "@/app/page";
import Link from "next/link";

export default function Header() {
    return (

        <nav className=" flex flex-row justify-between items-center align-middle w-screen h-20 min-w-fit bg-blue-200">

            <div className="flex items-center font-black w-full h-full pl-12 sm:text-xl md:text-2xl lg:text-3xl xl:4xl">
                <Link href="/"> <b>ADAM</b> </Link>
            </div>

            <div className="pr-10 items-center flex gap-6 xs:text-lg sm:text-xl md:text-2xl lg:text-3xl ">
                <span><Link href="/" className="hover:text-white">Home</Link></span>
                <span><Link href="/about" className="hover:text-white">About</Link></span>
                <span><Link href="/portfolio" className="hover:text-white">Portfolio</Link></span>
                <span><Link href="/contact" className="hover:text-white">Contact</Link></span>
                
            </div>
            
        </nav>
    )
}