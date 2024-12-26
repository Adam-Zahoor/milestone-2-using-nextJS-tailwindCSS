import Image from "next/image";
import image from "@/app/IMG_20231203_081533.jpg";

export default function Body() {
    return (
        <div className="w-screen items-center">
            <div className="flex w-screen flex-row justify-center">
                <Image className="flex justify-center border-x-slate-950 rounded-full size-52 xs:size-56 sm:size-60 md:size-64 lg:size-72 xl:size-80 2xl:size-96  " src={image} alt=""></Image>
            </div>
            <br />
            <br />
            <div className="flex justify-center w-screenmx-4 items-center text-center">
                <p className="font-sans text-2xl flex justify-center font-black pr-4 pl-4 sm:text-xl md:text-2xl lg:text-3xl">Hello Everyone! My name is Adam Minhas. Welcome to my Portfolio Website.</p>
            </div>
            <br />
            <br />
        </div>
    )
}