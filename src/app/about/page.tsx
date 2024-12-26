import Header from "@/Components/Header/Header"
import Footer from "@/Components/Footer/page"

export default function About() {
    return (
        <div className="">
            <div>
                <Header/>
            </div>

            <br />
            <br />

            <p className="flex flex-col px-4 items-center font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl pt-10">ABOUT US:</p>

            <br />

            <div className="flex flex-col font-normal px-4 text-center text-lg sm:text-2xl md:text-3xl lg:text-4xl items-center justify-between pt-10">
                Want to make your website look really good and tempting? We are here to provide our clients with websites made really good to attract users from all over the world. Do keep us in your consideration when choosing someone who can get your work done splendidly. We promise quality work done within the time limit!
            </div>

            <br />
            <br />

            <div>
                <Footer />
            </div>
        </div>
    )
}