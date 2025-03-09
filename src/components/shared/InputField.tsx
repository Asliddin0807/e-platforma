import { Input, Textarea } from "@chakra-ui/react";

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
  change,

  placeholder,
  value,
  big,

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
          mt={2}
          placeholder={placeholder}
          variant="subtle"
          onChange={areachange}
          value={value}
        />
      )}
    </>
  );
}
