import { StaticImageData } from 'next/image';

export type Skill = {
    skills: string;
    status: string;
    image: StaticImageData;
    category: string,
    description: string;
};
