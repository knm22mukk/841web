type Props = {
  title: string;
};

const SectionHeader = ({ title }: Props) => {
  return (
    <div className='py-2 my-2'>
      <h4 className='px-2 text-xl font-bold border-l-4 border-red-600'>{title}</h4>
    </div>
  );
};

export default SectionHeader;
