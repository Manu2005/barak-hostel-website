import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function TrophyModel({ modelPath, resetRotation, scale = 1.3, position = [0, -1, 0] }) {
  const group = useRef();
  useFrame(() => {
    if (resetRotation.current && group.current) {
      group.current.rotation.set(0, 0, 0);
      resetRotation.current = false;
    }
  });
  const { scene } = useGLTF(modelPath);
  return <primitive ref={group} object={scene} scale={scale} position={position} />;
}

export default TrophyModel;