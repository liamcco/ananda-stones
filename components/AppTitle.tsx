import Logo from "./shared/Logo";

export default function AppTitle() {
  return (
    <div className="m-4 flex justify-center items-center">
      <div className="w-[212px] animate-wiggle">
        <Logo />
      </div>
      <span className="text-4xl text-right md:text-7xl font-extrabold p-2 m-4">
        Ananda Stones
      </span>
    </div>
  );
}
