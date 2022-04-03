type Props = {
  title: string;
};

const PageHeader = ({ title }: Props) => {
  return (
    <div className='py-5 my-3 bg-gray-100 border-l-4 border-indigo-500'>
      <h2 className='px-3 text-2xl font-bold'>{title}</h2>
    </div>
  );
};

export default PageHeader;
