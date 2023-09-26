import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { PropsWithChildren } from 'react';

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>;

export const DotButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
};

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="z-[1] m-0 hidden h-12 w-12 cursor-pointer touch-manipulation items-center justify-center rounded-lg bg-background text-primary no-underline shadow-sm disabled:opacity-30 md:flex"
      type="button"
      {...restProps}
    >
      <ChevronLeft className="h-[65%] w-[65%]" />

      {children}
    </button>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="z-[1] m-0 hidden h-12 w-12 cursor-pointer touch-manipulation items-center justify-center rounded-lg bg-background text-primary no-underline shadow-sm disabled:opacity-30 md:flex"
      type="button"
      {...restProps}
    >
      <ChevronRight className="h-[65%] w-[65%]" />

      {children}
    </button>
  );
};
