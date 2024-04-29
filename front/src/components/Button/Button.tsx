interface StyledButtonProps {
  // Agrega tus props aquí
  name: string;
}

const StyledButton: React.FC<StyledButtonProps> = ({name}) => {
  return (
    <button
      style={{marginRight: "7.5rem"}}
      className="mt-0 mb-5 text-sm border-none w-40 py-2.5 h-10 rounded-full text-white bg-purple-400 cursor-pointer transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-80 hidden md:block sm:mb-0"
    >
      {/* Contenido del botón */}
      {name}
    </button>
  );
};

export default StyledButton;