import Image from "next/image";
import { VscAccount } from "react-icons/vsc";

interface AvatarProps {
  src?: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  if (src) {
    return (
      <Image
        src={src}
        alt="Avatar"
        height={30}
        width={30}
        className=" rounded-full"
      />
    );
  }
  return <VscAccount size={25} />;
};

export default Avatar;
