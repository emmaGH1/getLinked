import Link from "next/link";

const Logo = () => {
  return (
    <Link href='/' className="flex font-clashDisplay text-xl lg:text-2xl font-semibold">
        <span>
            get
        </span>
        <span className="text-secondary">
           linked 
        </span>
    </Link>
  );
};

export default Logo;