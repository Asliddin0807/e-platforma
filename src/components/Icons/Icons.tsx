"use client";
import dynamic from "next/dynamic";
import React from "react";
import * as Iconses from "react-icons/bi"; // Импортируем все иконки как объект
import { useColorMode } from "@/components/ui/color-mode";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  iconName: keyof typeof Iconses | string; // Разрешаем только существующие иконки из Bi (BoxIcons)
  color?: string;
  prioritet?: boolean;
  size?: string | number;
}

const Icons: React.FC<IconsProps> = ({
  iconName = "",
  color = "black",
  prioritet = false,
  size = "24px",
  ...props
}) => {
  const { colorMode } = useColorMode();
  const IconComponent = Iconses[iconName as keyof typeof Iconses];

  if (!IconComponent) {
    return null;
  }

  const obj = { color: prioritet ? color : colorMode, fontSize: size };

  return <IconComponent style={obj} {...props} />;
};

export default dynamic(() => Promise.resolve(Icons), { ssr: false });