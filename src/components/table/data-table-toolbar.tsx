/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Table } from '@tanstack/react-table'
import { Input } from '@/components/ui/input'
import { DataTableViewOptions } from './data-table-view-options'
import { ReactNode } from 'react'

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  addButton?: ReactNode
}

export function DataTableToolbar<TData = any>({
  table,
  addButton,
}: DataTableToolbarProps<TData>) {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase()
    table.setGlobalFilter(searchValue)
  }

  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-1 flex-col-reverse items-start gap-2 sm:flex-row sm:items-center sm:space-x-2'>
        <Input
          placeholder='Search'
          value={table.getState().globalFilter ?? ''}
          onChange={handleSearchChange}
          className='h-8 w-[250px] lg:w-[350px]'
        />
      </div>

      {addButton}
      <DataTableViewOptions table={table} />
    </div>
  )
}
