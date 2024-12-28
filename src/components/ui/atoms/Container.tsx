import { useExampleStore } from "@stores/exampleStore";
import { getRandomColor } from "@utils/functions";
import { FC, PropsWithChildren } from "react";
import styled, { css } from "styled-components";

type ContainerProps = {
  $debug: boolean;
  $debugColor: string;
  $position: "relative" | "absolute" | "fixed" | "sticky";
  $width: string;
  $height: string;
  $flexGrow: number;
};

export const Container: FC<PropsWithChildren & Partial<ContainerProps>> = ({ children, ...rest }) => {
  const debug = useExampleStore.use.debug();

  return (
    <StyledContainer $debug={debug} $debugColor={getRandomColor()} {...rest}>
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.div<Partial<ContainerProps>>`
  position: ${(props) => props.$position};
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  flex-shrink: 0;
  flex-grow: ${(props) => props.$flexGrow};
  ${(props) =>
    props.$debug &&
    css`
      margin: 1rem;
      border: 1px dashed rgba(${props.$debugColor});
      background-color: rgba(${props.$debugColor}, 0.1);
    `};
`;