import { motion, useScroll } from 'framer-motion';
import Header from "@/components/Header/Header";
import { MdArrowBack } from "react-icons/md";
import Link from "next/link";

export default function AppLayout({ children, pageTitle, goBack, hasScrollProgress, hasPDF }) {
    const { scrollYProgress } = useScroll();

    return (
        <div className="flex w-full h-full">
            <Header />
            
            <div className={`flex flex-grow flex-col xl:gap-16 lg:gap-8 md:gap-4 gap-2 overflow-x-hidden overflow-y-auto w-full relative ${hasPDF ? 'p-0' : 'lg:p-12 md:p-4 xl:p-16'}`}>
                {hasScrollProgress &&
                    <motion.div
                        className="top-0 fixed left-0 right-0 h-2 bg-[#e0514d] origin-left	z-10"
                        style={{ scaleX: scrollYProgress }}
                    />
                }
                <Link href={goBack ? "/" : "#"} className={`${hasPDF ? 'absolute top-0 left-0 lg:p-12 md:p-4 xl:p-16 w-full  backdrop-blur-xl bg-[white] bg-opacity-50' : ''}`}>
                    <div className={`flex gap-4 cursor-pointer items-center ${hasPDF ? '' : ''}`}>
                        {goBack &&
                            <MdArrowBack size={48} />
                        }
                        <h1 className="text-2xl lg:text-5xl truncate w-full">{pageTitle}</h1>
                    </div>
                </Link>
                <div className="flex flex-col gap-8 ">
                    {children}
                </div>
            </div>
        </div>
    );
}
