import { useExampleStore } from "@stores/exampleStore";
import { getRandomColor } from "@utils/functions";
import { FC, PropsWithChildren } from "react";
import styled, { css } from "styled-components";

type LayoutProps = {
  $debug: boolean;
  $debugColor: string;
  $flexDirection: "row" | "row-reverse" | "column" | "column-reverse";
  $justifyContent: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  $alignItems: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  $gap: number;
};

export const Layout: FC<PropsWithChildren & Partial<LayoutProps>> = ({ children, ...rest }) => {
  const debug = useExampleStore.use.debug();

  return (
    <LayoutContainer $debug={debug} $debugColor={getRandomColor()} {...rest}>
      {children}
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div<Partial<LayoutProps>>`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: ${(props) => props.$flexDirection};
  align-items: ${(props) => props.$alignItems};
  justify-content: ${(props) => props.$justifyContent};
  gap: ${(props) => (props.$gap ? props.$gap + "rem" : null)};
  ${(props) =>
    props.$debug &&
    css`
      padding: 0.8rem;
      border: 1px dashed rgba(${props.$debugColor});
      background-color: rgba(${props.$debugColor}, 0.1);

      &::after {
        content: "Component: Layout";
        text-transform: uppercase;
        display: block;
        position: absolute;
        bottom: 0;
        right: 4px;
        font-size: 6px;
        color: red;
        letter-spacing: 0.5px;
        font-weight: 800;
      }
    `}
`;
