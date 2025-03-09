import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { LANGUAGE } from "@/constants/editor_constants";
import { CODE_SNIPPETS } from "@/constants/editor_constants";

import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";

interface Props {
  language: string;
  onSelect: (language: keyof typeof CODE_SNIPPETS) => void;
}

export default function ProgLanguages({ language, onSelect }: Props) {
  const languages = Object.entries(LANGUAGE);

  return (
    <Box>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="outline" size="sm">
            {language}
          </Button>
        </MenuTrigger>
        <MenuContent bg={"#110c1b"}>
          {languages.map(([lang, version]) => (
            <MenuItem
              key={lang}
              color={lang === language ? "blue.500" : ""}
              bg={lang === language ? "gray.900" : "transparent"}
              onClick={() => onSelect(lang)}
              _hover={{ color: "blue.500", bg: "gray.900" }}
              value={lang}
            >
              {lang} &nbsp;
              <Text as={"span"} color={"gray.500"} fontSize={"sm"}>
                {version}
              </Text>
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </Box>
  );
}
