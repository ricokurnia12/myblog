'use client'
import { ColumnDef } from '@tanstack/react-table';
import { dataSkills } from '@/data/dataSkills';
import { Skill } from '@/types/skills.type';
import TableComponent from '@/components/table/table-component';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
const skillColumns: ColumnDef<Skill>[] = [
    {
        accessorKey: 'skills',
        header: 'Skill',
        cell: info => {
            return (
                <div className='flex space-x-2 items-center'>
                    <Image
                        src={info.row.original.image.src} // Access the src property of the StaticImageData object
                        alt={info.row.original.skills}
                        width={40}
                        height={40} />
                    <div className='text-sm'>{info.row.original.skills}</div>
                </div>
            )
        }


    },
    {
        accessorKey: 'category',
        header: 'Category',
        cell: info => {
            return (
                <>
                    <div className='text-sm'>{info.row.original.category}</div>
                </>
            )
        }


    },
    {
        accessorKey: 'status',
        header: 'Status',
        cell: info => info.getValue(),
    },
    // {
    //     accessorKey: 'image',
    //     header: 'Image',
    //     cell: info => {
    //         const imageData = info.getValue() as StaticImageData;
    //         return (
    //             <Image
    //                 src={imageData.src} // Access the src property of the StaticImageData object
    //                 alt={info.row.original.skills}
    //                 width={40}
    //                 height={40}
    //                 className="object-contain"
    //             />
    //         );
    //     },
    // },
    {
        accessorKey: 'description',
        header: 'Description',
        cell: info => info.getValue(),
    },
];

export default function MySkills() {
    return (
        <div className='mt-4'>
            <TableComponent
                columns={skillColumns}
                data={dataSkills}
            // title="My Skills"
            />
        </div>
    );

}

