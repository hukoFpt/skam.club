import Image from "next/image";

type Props = {
  avatar_url: string;
  level: number;
};
export const UserAvatar = ({ avatar_url, level }: Props) => {
  return (
    <div className="h-11 relative w-11 ml-5">
      <Image
        src={avatar_url}
        height={44}
        width={44}
        alt="user"
        className="rounded-full border-2 border-[#787286] p-[2px]"
      />
      <div className="user-level items-center justify-center text-[11px] font-semibold">{level}</div>
    </div>
  );
};
