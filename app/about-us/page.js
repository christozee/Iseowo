
import Image from "next/image";

export default function Page (){
    return(
        <main className="py-8 md:py-12 1g:py-16 px-2 md:px-8 1g:px-16">
            <h1 className="text-4xl mb-4"> Iseowo. The Freelance Market Place Artisans</h1>
            <Image width={720} height={380} src="/home.png" alt="about us picture"/>
        </main>
    )
}