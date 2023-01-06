import Image from "next/image";

function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-0.5">
      <Image
        className="rounded-full object-cover"
        src="/nmfc-logo.svg"
        alt="Logo"
        width={50}
        height={50}
      />
      <>{renderDefault(props)}</>
    </div>
  );
}

export default Logo;
