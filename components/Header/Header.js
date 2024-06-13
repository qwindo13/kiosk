import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <div 
            className="w-2/12 h-screen flex flex-col px-8 py-8 sticky top-0" 
            style={{ backgroundImage: "url('/images/side-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>
            
            <div className="flex flex-grow items-start justify-center z-20">
                <Link href="/" className="cursor-pointer">
                    <Image src="/images/logo.svg" height={80} width={80} alt="logo" />
                </Link>
            </div>
        </div>
    );
}
