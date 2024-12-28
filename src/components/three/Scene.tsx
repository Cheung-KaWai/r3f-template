import { Container } from "@components/ui/atoms/Container";
import { Box, CameraControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export const Scene = () => {
  return (
    <Container $width="80svw">
      <Canvas>
        <Box />
        <CameraControls />
      </Canvas>
    </Container>
  );
};
