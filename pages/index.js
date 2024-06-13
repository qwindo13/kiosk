import { motion } from 'framer-motion';
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import AppLayout from '@/layouts/AppLayout/AppLayout';

function InfoSquare({ title, description, pdfFile, color }) {
  const encodedTitle = encodeURIComponent(title);
  const encodedPdfFile = encodeURIComponent(pdfFile.replace('.pdf', ''));
  const link = `/pdf/${encodedPdfFile}?title=${encodedTitle}`;

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    tap: { scale: 0.95 }
  };

  return (
    <Link href={link} passHref>
      <motion.div
        className="w-full h-full text-white p-4 md:p-8 flex flex-col gap-4 relative overflow-hidden cursor-pointer justify-between"
        style={{ backgroundColor: color }}
        variants={itemVariants}
        initial="initial"
        animate="enter"
        whileHover="hover"
        whileTap="tap"
      >
        <div className="flex flex-col gap-4">
          <span className="text-4xl lg:text-3xl font-semibold uppercase">{title}</span>
          <span className="opacity-60 text-lg">{description}</span>
        </div>
        <div className="flex justify-end">
          <MdArrowForward size={48} />
        </div>
      </motion.div>
    </Link>
  );
}

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  return (
    <AppLayout pageTitle="Painel de Informações">

      <motion.div
        className="grid grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {[
          { title: "Calendário Escolar", description: "Informações adicionais relevantes.", color: "#616365", pdfFile: "CalEsc.pdf" },
          { title: "Certificado Energético", description: "Informações adicionais relevantes.", color: "#616365", pdfFile: "CE.pdf" },
          { title: "Contactos", description: "Informações adicionais relevantes.", color: "#616365", pdfFile: "Contactos.pdf" },
          { title: "Tabela Emolumentos", description: "Informações adicionais relevantes.", color: "#616365", pdfFile: "Emolumentos.pdf" },
          { title: "Selo Eqavet", description: "Informações adicionais relevantes.", color: "#616365", pdfFile: "Eqavet.pdf" },
          { title: "Horário Pessoal", description: "Informações adicionais relevantes.", color: "#616365", pdfFile: "HP.pdf" },
          { title: "Mapa de Férias", description: "Explore o mapa de férias dos funcionários.", color: "#C60C30", pdfFile: "MF.pdf" },
          { title: "Medidas de Auto - Proteção", description: "Explore o mapa de férias dos funcionários.", color: "#C60C30", pdfFile: "MP.pdf" },
          { title: "Relatório Único", description: "Explore o mapa de férias dos funcionários.", color: "#C60C30", pdfFile: "RU.pdf" },
          { title: "Código de Conduta", description: "Consulte o código de conduta e ética.", color: "#005BBB", pdfFile: "Código de Conduta e Etica.pdf" },
          { title: "Prevenção e Combate ao Assédio", description: "Código de prevenção e combate ao assédio.", color: "#009966", pdfFile: "Prevenção e Combate ao Assédio no Trabalho.pdf" },
        ].map(info => (
          <InfoSquare key={info.title} {...info} />
        ))}
      </motion.div>
    </AppLayout>
  );
}
