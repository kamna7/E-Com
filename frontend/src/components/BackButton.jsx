import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {

  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="
        fixed
        top-24
        left-10
        z-50
        bg-white
        shadow-md
        p-3
        hover:bg-[#E7A951]
        hover:text-white
        transition
        duration-300
      "
    >
      <ArrowLeft size={25} />
    </button>
  );
};

export default BackButton;