import logo from "@/assets/logo/logo.png";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="bg-white rounded-full shadow-md aspect-square flex justify-center items-center">
      <Image src={logo} alt="Ananda Garden Logo" className="w-3/4" />
    </div>
  );
}
