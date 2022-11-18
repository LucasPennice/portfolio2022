/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { motion } from "framer-motion-3d";
import { modelAnimation } from "./animation";

type GLTFResult = GLTF & {
    nodes: {
        Cube033: THREE.Mesh;
        Cube033_1: THREE.Mesh;
        Cube033_2: THREE.Mesh;
        Cube033_3: THREE.Mesh;
        Cube033_4: THREE.Mesh;
        Cube033_5: THREE.Mesh;
        Cube033_6: THREE.Mesh;
        Cube033_7: THREE.Mesh;
        Cube033_8: THREE.Mesh;
    };
    materials: {
        ["BrownDark.049"]: THREE.MeshStandardMaterial;
        ["PurpleDark.003"]: THREE.MeshStandardMaterial;
        ["White.034"]: THREE.MeshStandardMaterial;
        ["Metal.080"]: THREE.MeshStandardMaterial;
        ["BlueDark.003"]: THREE.MeshStandardMaterial;
        ["GreenDark.007"]: THREE.MeshStandardMaterial;
        ["WoodDark.005"]: THREE.MeshStandardMaterial;
        ["StoneDark.001"]: THREE.MeshStandardMaterial;
        ["Black.030"]: THREE.MeshStandardMaterial;
    };
};

export function BookshelfModel() {
    //@ts-ignore
    const { nodes, materials } = useGLTF("/bookshelfModel.gltf") as GLTFResult;
    return (
        //@ts-ignore
        <motion.group dispose={null} {...modelAnimation}>
            <group rotation={[Math.PI / 2, 0, 0]}>
                <mesh castShadow receiveShadow geometry={nodes.Cube033.geometry} material={materials["BrownDark.049"]} />
                <mesh castShadow receiveShadow geometry={nodes.Cube033_1.geometry} material={materials["PurpleDark.003"]} />
                <mesh castShadow receiveShadow geometry={nodes.Cube033_2.geometry} material={materials["White.034"]} />
                <mesh castShadow receiveShadow geometry={nodes.Cube033_3.geometry} material={materials["Metal.080"]} />
                <mesh castShadow receiveShadow geometry={nodes.Cube033_4.geometry} material={materials["BlueDark.003"]} />
                <mesh castShadow receiveShadow geometry={nodes.Cube033_5.geometry} material={materials["GreenDark.007"]} />
                <mesh castShadow receiveShadow geometry={nodes.Cube033_6.geometry} material={materials["WoodDark.005"]} />
                <mesh castShadow receiveShadow geometry={nodes.Cube033_7.geometry} material={materials["StoneDark.001"]} />
                <mesh castShadow receiveShadow geometry={nodes.Cube033_8.geometry} material={materials["Black.030"]} />
            </group>
        </motion.group>
    );
}

useGLTF.preload("/bookshelfModel.gltf");
