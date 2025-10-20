import { Loader2 } from "lucide-react";
import { useRef, useState, useCallback } from "react";
import { FiFileText } from "react-icons/fi";
import { useResizeDetector } from "react-resize-detector";
import SimpleBar from "simplebar-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function ViewResumePDF() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [numPages, setNumPages] = useState<number>(0);

  const { width, ref } = useResizeDetector();

  const openDialog = useCallback(() => {
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden"; // prevent body scroll
  }, []);

  const closeDialog = useCallback(() => {
    dialogRef.current?.close();
    document.body.style.overflow = ""; // restore scroll
  }, []);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDialogElement>) => {
      if (e.target === dialogRef.current) closeDialog();
    },
    [closeDialog]
  );

  return (
    <>
      <button
        onClick={openDialog}
        aria-label="View Resume"
        className="relative inline-flex items-center justify-center gap-2 ml-3 px-4 py-2 rounded text-sm font-medium text-cyan-300 border border-cyan-300 transition-all duration-300 ease-in-out group overflow-hidden"
      >
        <div className="absolute inset-0 h-0 w-full group-hover:h-full group-hover:bg-cyan-300/70 transition-all duration-500"></div>
        <span className="relative z-10 flex items-center gap-2 group-hover:text-slate-900 transition-colors duration-300">
          <FiFileText />
          Resume
        </span>
      </button>

      <dialog
        ref={dialogRef}
        onClick={handleBackdropClick}
        className="p-0 border-0 bg-transparent fixed inset-0 w-full h-full z-50"
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          onClick={closeDialog}
        ></div>

        {/* PDF Container */}
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden">
          {/* Close Button */}
          <button
            onClick={closeDialog}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
          >
            ✕
          </button>

          {/* PDF Viewer */}
          <SimpleBar autoHide={false} className="max-h-[80vh] mt-6">
            <div ref={ref}>
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
      </dialog>
    </>
  );
}

export default ViewResumePDF;
