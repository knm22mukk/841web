type Props = {
  title: string;
};

const Button = ({ title }: Props) => {
  return (
    <button className='py-4 px-10 text-xl font-bold text-white bg-blue-500 hover:bg-indigo-700 rounded border-indigo-500 transition duration-150 ease-in-out'>
      {title}
    </button>
  );
};

export default Button;
