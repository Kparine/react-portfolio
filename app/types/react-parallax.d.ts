// react-parallax ships its types as raw .ts source, which fails strict
// type-checking (`verbatimModuleSyntax`) and isn't covered by skipLibCheck.
// tsconfig "paths" points the package's types here instead; runtime
// resolution is unaffected. Covers only the props this site uses.
declare module 'react-parallax' {
  import type { ComponentType, ReactNode } from 'react';

  export interface ParallaxProps {
    bgImage?: string;
    bgImageAlt?: string;
    strength?: number;
    className?: string;
    children?: ReactNode;
  }

  export const Parallax: ComponentType<ParallaxProps>;
}
