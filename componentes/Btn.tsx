type Props = {
    label: string;
    onClick: () => void;
  };
  
  const Btn = ({ label, onClick }: Props) => {
    return (
      <button onClick={onClick} className="text-red-500 border border-red-500 p-2 mr-4">
        {label}
      </button>
    );
  };
  
  export default Btn;
  
