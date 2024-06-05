type Props ={
    label:string;
    onClick: () => void;
}

export const CustomButton = ({label, onClick}: Props) => {
    return (
        <div>
        <button onClick={onClick} className="mb-3 text-1xl font-bold text-white bg-gray-900 border border-gray-500 p-1 rounded-md">
            {label}
        </button>
        </div>
    );
}
