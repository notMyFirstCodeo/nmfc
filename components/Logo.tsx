import Image from "next/image";

function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        src="/../assets/nmfc-logo.png"
        alt="Logo"
        width={50}
        height={50}
      />
    </div>
  );
}

export default Logo;
