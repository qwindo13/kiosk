// pages/pdf/[pdf].js
import { useRouter } from 'next/router';
import AppLayout from '@/layouts/AppLayout/AppLayout';

export default function PDFViewer() {
  const router = useRouter();
  const { pdf, title } = router.query; // Retrieving the title query parameter as well

  if (!router.isReady) return null;

  const decodedTitle = decodeURIComponent(title || 'Default Title');
  const pdfUrl = `/pdfs/${pdf}.pdf`;

  return (
    <AppLayout pageTitle={`${title}`} goBack hasPDF>
     
      <div style={{ height: 'calc(100vh )', width: '100%' }} className=''>
        <embed src={`${pdfUrl}#toolbar=0`} width="100%" height="100%" />
      </div>

    </AppLayout>
  );
}
