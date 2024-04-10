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

export type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export interface ICardContainer {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export interface ICardBody {
  children: React.ReactNode;
  className?: string;
}

export interface ICardItem {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
}
