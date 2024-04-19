import Image from "next/image";
import { FuzzieLogo } from "@/assets";

export const Logo = () => {
  return (
    <aside className="flex items-center gap-[2px]">
      <p className="text-3xl font-bold">Fu</p>
      <Image
        src={FuzzieLogo}
        width={15}
        height={15}
        alt="fuzzie logo"
        className="shadow-sm"
      />
      <p className="text-3xl font-bold">zie</p>
    </aside>
  );
};
