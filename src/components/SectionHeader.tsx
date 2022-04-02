type Props = {
  title: string;
};

const SectionHeader = ({ title }: Props) => {
  return (
    <div className='py-3 my-3 bg-gray-100 border-l-4 border-indigo-500'>
      <h4 className='px-3 text-2xl font-bold '>{title}</h4>
    </div>
  );
};

export default SectionHeader;
