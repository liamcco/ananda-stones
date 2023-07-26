import logo from "@/assets/logo/logo.png";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="bg-white rounded-full max-w-[6rem] max-h-24 shadow-md">
      <Image
        src={logo}
        alt="Ananda Garden Logo"
        className="h-full w-full p-4"
      />
    </div>
  );
}
