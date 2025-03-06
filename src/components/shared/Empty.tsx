import { EmptyState, Link, VStack } from "@chakra-ui/react";
import Icons from "../Icons/Icons";

interface Props {
  title: string;
  desc: string;
  link?: string;
}

const Empty = ({ title, desc, link }: Props) => {
  return (
    <EmptyState.Root>
      <EmptyState.Content>
        <EmptyState.Indicator>
          <Icons iconName={"BiInfoCircle"} size={60} />
        </EmptyState.Indicator>
        <VStack textAlign="center">
          <EmptyState.Title>{title}</EmptyState.Title>
          <EmptyState.Description>
            {desc}
            {link && <Link href={link}>Havola</Link>}
          </EmptyState.Description>
        </VStack>
      </EmptyState.Content>
    </EmptyState.Root>
  );
};

export default Empty;
