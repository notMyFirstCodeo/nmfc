import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#F8D50F] flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#F8D50F] mr-2" />
          Go To Website
        </Link>

        <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#F8D50F]">
          <h1 className="font-bold text-white">
            Want to see videos on how to advance your coding career?
          </h1>
          <Link
            href="https://www.youtube.com"
            className="text-[#F8D50F] font-bold ml-2"
          >
            www.youtube.com
          </Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
