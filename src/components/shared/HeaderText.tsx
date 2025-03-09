import { Text } from "@chakra-ui/react";

interface Props {
  text: string;
}
export default function Header({ text }: Props) {
  return (
    <Text fontSize={"40px"} fontWeight={"bold"}>
      {text}
    </Text>
  );
}
