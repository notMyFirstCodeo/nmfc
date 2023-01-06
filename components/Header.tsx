import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image src="/nmfc-logo.svg" alt="logo" width={50} height={50} />
        </Link>
        <h1>Not My First Codeo</h1>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
