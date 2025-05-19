type Props = {
  name: string;
};

export const Label = ({ name }: Props) => {
  return <div className="text-[12px] ml-3 text-white">{name}</div>;
};
