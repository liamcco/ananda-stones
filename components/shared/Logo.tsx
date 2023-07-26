import logo from "@/assets/logo/logo.png";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="bg-white rounded-full w-24 h-24 shadow-md">
      <Image
        src={logo}
        alt="Ananda Garden Logo"
        className="h-full w-full p-4"
      />
    </div>
  );
}
