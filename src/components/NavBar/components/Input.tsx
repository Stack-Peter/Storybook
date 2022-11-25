import Glass from "../../../assets/svg/Glass";

const Input = () => {
  return (
    <div className="flex">
      <input
        type="text"
        className="border-[1px] border-gray-300 outline-none px-[12px] py-[6px] w-[442px] rounded-l-md placeholder:text-gray-600"
        placeholder="O que você gostaria de buscar?"
      />
      <button
        type="button"
        className="flex justify-center items-center bg-blue-600 text-white px-[12px] py-[6px] w-[96px] h-[38px] rounded-r-md hover:bg-blue-700"
      >
        <Glass />
        Busca
      </button>
    </div>
  );
};

export default Input;
