import { Input, Textarea } from "@chakra-ui/react";
import { Field } from "../ui/field";
import React from "react";

interface Props {
  label?: string;
  helperText?: string;
  placeholder: string;
  value?: string;
  change?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  areachange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  big: true | false;
  name?: string;
}

export default function InputField({
  label,
  change,
  helperText,
  placeholder,
  value,
  big,
  name,
  areachange,
}: Props) {
  return (
    <>
      {!big ? (
        <Input
          placeholder={placeholder}
          onChange={change}
          value={value}
          variant="subtle"
          mt={2}
        />
      ) : (
        <Textarea
          placeholder={placeholder}
          variant="subtle"
          onChange={areachange}
          value={value}
        />
      )}
    </>
  );
}
