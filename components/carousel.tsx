/* eslint-disable import/named */
'use client';

import useEmblaCarousel, { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useCallback } from 'react';
import { DotButton, PrevButton, NextButton } from './emblacarouselarrowsdots';
import imageIndex from '@/components/carouselImages';

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className=" flex touch-pan-y ">
            {slides.map((index) => (
              <div className="relative mr-2 min-w-0 flex-[0_0_100%]" key={index}>
                <div className="pointer-events-none absolute right-[0.6rem] top-[0.6rem] z-[1] h-[4.6rem] w-[4.6rem] rounded-[10%] bg-destructive text-center font-black leading-[4.6rem]">
                  <span>
                    {index + 1} / {slides.length}
                  </span>
                </div>
                <Link href={'#' + index}>
                  <Image
                    className="block w-full rounded-lg object-cover"
                    src={imageIndex(index)}
                    alt="carousel_image"
                    width={1500}
                    height={500}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-[-0.6rem] left-[1rem] flex -translate-y-2/4 gap-1">
          <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
          <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
        </div>
      </div>

      <div className="container relative z-[1] flex max-w-5xl flex-wrap items-center justify-center">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={
              index === selectedIndex
                ? 'm-0 mx-3 inline-flex h-[1.8rem] w-[1.8rem] cursor-pointer touch-manipulation items-center border-0 bg-transparent p-0 no-underline after:h-[0.4rem] after:w-full after:rounded-[0.2rem] after:bg-primary after:content-[""] dark:after:bg-primary md:h-[2.4rem] md:w-[2.4rem]'
                : 'm-0 mx-3 inline-flex h-[1.8rem] w-[1.8rem] cursor-pointer touch-manipulation items-center border-0 bg-transparent p-0 no-underline after:h-[0.4rem] after:w-full after:rounded-[0.2rem] after:bg-muted-foreground after:content-[""] dark:after:bg-muted-foreground md:h-[2.4rem] md:w-[2.4rem]'
            }
          />
        ))}
      </div>
    </>
  );
};

export default EmblaCarousel;
