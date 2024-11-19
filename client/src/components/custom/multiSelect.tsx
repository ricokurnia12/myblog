"use client";

import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "./multiCommand";
import {
  Form,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";

interface MultiSelectProps<T> {
  form: ReturnType<typeof useForm<any>>;
  items: { label: string; value: string }[];
  fieldName: string;
  placeholder?: string;
  onSelect?: (value: string) => void; // Callback for selection
}

export function MultiSelect<T>({
  form,
  items,
  fieldName,
  placeholder = "Select...",
  onSelect,
}: MultiSelectProps<T>) {
  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name={fieldName as any}
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel>{placeholder}</FormLabel>
            <MultiSelector onValuesChange={field.onChange} values={field.value}>
              <MultiSelectorTrigger>
                <MultiSelectorInput placeholder={placeholder} />
              </MultiSelectorTrigger>
              <MultiSelectorContent>
                <MultiSelectorList>
                  {items.map((item) => (
                    <MultiSelectorItem key={item.value} value={item.label}>
                      <div className="flex items-center space-x-2">
                        <span>{item.value}</span>
                      </div>
                    </MultiSelectorItem>
                  ))}
                </MultiSelectorList>
              </MultiSelectorContent>
            </MultiSelector>
            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  );
}
