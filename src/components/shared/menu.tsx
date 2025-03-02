"use client";
import { Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
  MenuTriggerItem,
} from "@/components/ui/menu";
import { useState } from "react";

export default function Menu() {
  const [select, setSelect] = useState<string>("Yo'nalish");
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button mt={2} variant="subtle" size="sm">
          {select}
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="Backend" onClick={() => setSelect("Backend")}>
          Backend
        </MenuItem>
        <MenuItem value="Frontend" onClick={() => setSelect("Frontend")}>
          Frontend
        </MenuItem>
        <MenuItem value="Mobile" onClick={() => setSelect("Mobile")}>Mobile</MenuItem>
        <MenuItem value="Full Stack" onClick={() => setSelect("Full Stack")}>Full Stack</MenuItem>
        <MenuItem value="Loyha" onClick={() => setSelect("Loyha")}>Loyha</MenuItem>
      </MenuContent>
    </MenuRoot>
  );
}
