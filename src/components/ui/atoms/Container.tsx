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
  $padding: string;
  $border: string;
};

export const Container: FC<PropsWithChildren & Partial<ContainerProps>> = ({ children, ...rest }) => {
  return (
    <StyledContainer $debug={useExampleStore.use.debug()} $debugColor={getRandomColor()} {...rest}>
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.div<Partial<ContainerProps>>`
  display: block;
  padding: ${(props) => props.$padding ?? "0.8rem"};
  position: ${(props) => props.$position ?? "relative"};
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  flex-shrink: 0;
  flex-grow: ${(props) => props.$flexGrow};
  ${(props) =>
    props.$debug &&
    css`
      margin: 0.4rem;
      border: 1px dashed rgba(${props.$debugColor});
      background-color: rgba(${props.$debugColor}, 0.1);
      &::after {
        content: "Container";
        white-space: nowrap;
        text-transform: uppercase;
        display: block;
        position: absolute;
        bottom: 0px;
        right: 0px;
        font-size: 6px;
        color: red;
        letter-spacing: 1px;
        font-weight: 800;
      }
    `};
`;
