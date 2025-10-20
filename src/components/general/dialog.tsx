// import { useRef, useState } from "react";

// function DialogButton({ buttonText, title, children }) {
//   const dialogRef = useRef<HTMLDialogElement>(null);

//   const openDialog = () => {
//     dialogRef.current?.showModal();
//   };

//   const closeDialog = () => {
//     dialogRef.current?.close();
//   };

//   const handleBackdropClick = (e) => {
//     if (e.target === dialogRef.current) {
//       closeDialog();
//     }
//   };

//   return (
//     <>
//       <button
//         onClick={openDialog}
//         className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
//       >
//         {buttonText}
//       </button>

//       <dialog
//         ref={dialogRef}
//         onClick={handleBackdropClick}
//         className="p-6 rounded-xl shadow-xl backdrop:bg-black backdrop:bg-opacity-50 min-w-96"
//       >
//         <div className="relative">
//           <button
//             onClick={closeDialog}
//             className="absolute -top-2 -right-2 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
//           >
//             ✕
//           </button>
//           <h2 className="text-xl font-bold mb-2 pr-6">{title}</h2>
//           <div className="text-gray-600">{children}</div>
//         </div>
//       </dialog>
//     </>
//   );
// }

// export default DialogButton;
