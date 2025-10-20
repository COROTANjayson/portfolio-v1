import { Loader2 } from "lucide-react";
import { useRef, useState, useCallback } from "react";
import { FiFileText } from "react-icons/fi";
import { useResizeDetector } from "react-resize-detector";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { IconDownload, IconX } from "@tabler/icons-react";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function ViewResumePDF() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const { width, ref } = useResizeDetector();

  const openDialog = useCallback(() => {
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden"; // lock scroll
  }, []);

  const closeDialog = useCallback(() => {
    dialogRef.current?.close();
    document.body.style.overflow = ""; // restore scroll
  }, []);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) closeDialog();
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={openDialog}
        className="relative inline-flex items-center justify-center gap-2 ml-3 px-4 py-2 rounded text-sm font-medium text-cyan-300 border border-cyan-300 transition-all duration-300 ease-in-out group overflow-hidden"
      >
        <div className="absolute inset-0 h-0 w-full group-hover:h-full group-hover:bg-cyan-300/70 transition-all duration-500"></div>
        <span className="relative z-10 flex items-center gap-2 group-hover:text-slate-900 transition-colors duration-300">
          <FiFileText />
          Resume
        </span>
      </button>

      {/* Dialog */}
      <dialog
        ref={dialogRef}
        onClick={handleBackdropClick}
        className="fixed inset-0 z-50 w-full h-full bg-transparent border-0 p-0 open:flex open:flex-col"
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          onClick={closeDialog}
        />

        {/* Scrollable container */}
        <div className="relative flex-1 flex items-center justify-center">
          <div className="relative bg-white rounded-xl shadow-2xl max-w-5xl w-full h-[90vh] flex flex-col overflow-hidden">
            {/* Close button */}

            <a
              href="/CorotanJaysonJake-Resume.pdf"
              download="JaysonJake-Corotan-Resume.pdf"
              className="cursor-pointer absolute top-3 left-3 w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors z-10"
              aria-label="Download Resume PDF"
            >
              <IconDownload className="h-7 w-7" />
            </a>

            <button
              onClick={closeDialog}
              className=" cursor-pointer absolute top-3 right-3 w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors z-10"
            >
              <IconX className="h-7 w-7" />
            </button>

            {/* ✅ Scrollable PDF Area */}
            <SimpleBar style={{ maxHeight: "100%" }} className="flex-1">
              <div
                ref={ref}
                className="flex flex-col items-center pt-12 pb-6 px-4"
              >
                <Document
                  file="/CorotanJaysonJake-Resume.pdf"
                  onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                  loading={
                    <div className="flex justify-center py-16">
                      <Loader2 className="h-6 w-6 animate-spin text-gray-500" />
                    </div>
                  }
                  className="flex flex-col items-center"
                >
                  {Array.from({ length: numPages }, (_, i) => (
                    <Page
                      key={`page_${i + 1}`}
                      pageNumber={i + 1}
                      width={width ? Math.min(width, 800) : 600}
                      className="shadow-sm mb-4"
                    />
                  ))}
                </Document>
              </div>
            </SimpleBar>
          </div>
        </div>
      </dialog>
    </>
  );
}
