import Header from "@/Components/Header/Header"
import Footer from "@/Components/Footer/page"
import Link from "next/link"

export default function Portfolio() {
    return (
        <div>
            <div>
                <Header/>
            </div>

            <br />
            <br />

            <p className="flex flex-col items-center px-4 font-extrabold font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl">Do check out these projects that I made:</p>

            <br />
            <br />

            <span><Link className="flex flex-col items-center font-extrabold px-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl pt-10" href="https://vercel.com/adam-zahoors-projects/hackathon-first-milestone-static-resume-builder">Static Resume Builder</Link></span>
            

            <br />

            <span><Link className="flex flex-col items-center px-4 font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl pt-10" href="https://vercel.com/adam-zahoors-projects/hackathon-third-milestone-dynamic-resume-builder/6KWu2teJdnHjt2HzXQu1FzDFDpxe">Editable Resume Builder</Link></span>

            <br />

            <span><Link className="flex flex-col items-center px-4 font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl pt-10" href="https://vercel.com/adam-zahoors-projects/hackathon-fourth-milestone-editable-resume-builder/5zY1F2SAKEw4Atrgsjdvo4MqdHc6">Dynamic Resume Builder</Link></span>
            
            <br />
            <br />
            <br />

            <p className="flex flex-row justify-center font-extrabold px-3 items-center gap-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl">Here is the link to my Github Profile:<Link className="font-light flex justify-between" href="https://github.com/Adam-Zahoor">GitHub</Link></p>

            <br />
            <br />

            <div>
                <Footer />
            </div>

        </div>
    )
}