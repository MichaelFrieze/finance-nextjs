import Image from "next/image";
import Link from "next/link";

const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="hidden items-center lg:flex">
        <Image src="/logo.svg" alt="logo" height={28} width={28} />
        <p className="font-2xl ml-2.5 font-semibold text-white">Finance</p>
      </div>
    </Link>
  );
};

export default HeaderLogo;
