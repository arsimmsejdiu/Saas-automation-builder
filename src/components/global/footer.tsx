import { Button } from "@/components/ui/button";
import { Logo } from "@/components/global/logo";

export const Footer = () => {
  return (
    <div className="backdrop-blur-lg z-[100] flex items-center border-t-[1px] border-neutral-900 justify-between py-4 px-4 mt-28">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms & Conditions
        </Button>
      </div>
    </div>
  );
};
