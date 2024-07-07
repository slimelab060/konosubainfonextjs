'use client';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

type PropType = {
  title: string;
  description: string;
  url: string;
  imagepath: string;
};

export const Newsinfo: React.FC<PropType> = (props) => {
  return (
    <a href={props.url} aria-label={props.title}>
      <Card className="w-full max-w-5xl overflow-hidden rounded-lg shadow-sm">
        <Image
          src={props.imagepath}
          alt={props.imagepath}
          width={512}
          height={256}
          className="h-64 w-full object-cover hover:scale-105"
        />
        <div className="bg-background p-4">
          <h3 className="text-xl font-bold">{props.title}</h3>
          <p className="text-muted-foreground">{props.description}</p>
        </div>
      </Card>
    </a>
  );
};
