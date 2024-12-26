import Header from "@/Components/Header/Header"
import Footer from "@/Components/Footer/page"

export default function Contact() {
    return (
        <div>

            <div>
                <Header />
            </div>

            <br />
            <br />

            <p className="font-black flex justify-center items-center px-4 gap-4 size sm:text-xl md:text-2xl lg:text-3xl xl:4xl">You can email us at:</p>
            <p className="font-black flex justify-center items-center px-4 gap-4 size sm:text-xl md:text-2xl lg:text-3xl xl:4xl">adamzahoor18@gmail.com</p> 

            <br />
            <br />

            <div>
                <Footer />
            </div>
        
        </div>
    )
}