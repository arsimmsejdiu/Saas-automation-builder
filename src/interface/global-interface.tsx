import { MotionValue } from "framer-motion";

export interface ContainerScrollProps {
  titleComponent: string | React.ReactNode;
}

export interface ContainerCardProps {
  rotate: any;
  scale: any;
  translate: any;
}

export interface InfinitMovingCardPorps {
  items: {
    href: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export interface ConnectParallaxProps {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}

export interface ProductCardParallaxPorps {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}
