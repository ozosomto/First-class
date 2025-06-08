declare module '@splidejs/react-splide' {
  import * as React from 'react';

  export interface SplideProps {
    options?: Record<string, any>;
    hasTrack?: boolean;
    tag?: string;
    className?: string;
    id?: string;
    children?: React.ReactNode;
    [key: string]: any;
  }

  export class Splide extends React.Component<SplideProps> {}
  export class SplideSlide extends React.Component<{ children?: React.ReactNode }> {}
}
