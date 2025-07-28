import { useEffect } from "react";
import { X } from "lucide-react";
import modal from "../../assets/Gallery/Landing/modal/modal.png"

export default function SchoolModal({ setModal }) {
  const handleModalToggle = () => {
    setModal(false);
    localStorage.setItem("modalShown", "true"); 
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setModal(false);
      localStorage.setItem("modalShown", "true"); 
    }
  };

  useEffect(() => {
    // Show modal only on the home page and if it hasn't been shown already
    if (window.location.pathname === "/" && !localStorage.getItem("modalShown")) {
      setModal(true); 
    }
  }, [setModal]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0, 0, 0, 0.5)] backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-[500px] rounded-3xl shadow-2xl p-1">
        <button
          className="absolute top-4 right-4 z-10 text-white hover:text-white transition-colors duration-300 pl-100 pr-900 pt-3 md:pl-17 md:pt-2"
          onClick={handleModalToggle}
        >
          <X size={19} className="w-5 h-5 md:w-3 md:h-5" />
        </button>

        <img
          src={modal}
          className="rounded-2xl w-full mt-4 bg-none"
          alt="School Modal"
        />
      </div>
    </div>
  );
}
