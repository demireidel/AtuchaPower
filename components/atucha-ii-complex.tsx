"use client"

import { useRef } from "react"
import type { Group, Mesh } from "three"
import { useFrame } from "@react-three/fiber"
import { Text } from "@react-three/drei"

export function AtuchaIIComplex() {
  const complexRef = useRef<Group>(null)

  return (
    <group ref={complexRef}>
      {/* Terrain base */}
      <TerrainBase />

      {/* Paraná River */}
      <ParanaRiver />

      {/* Main reactor building */}
      <ReactorBuilding />

      {/* Cooling towers */}
      <CoolingTowers />

      {/* Auxiliary buildings */}
      <AuxiliaryBuildings />

      {/* Turbine hall */}
      <TurbineHall />

      {/* Administration building */}
      <AdministrationBuilding />

      {/* Security perimeter */}
      <SecurityPerimeter />

      {/* Electrical infrastructure */}
      <ElectricalInfrastructure />

      {/* Vegetation and landscaping */}
      <Vegetation />

      {/* Roads and pathways */}
      <RoadsAndPaths />

      {/* Parking areas */}
      <ParkingAreas />

      {/* Water intake structures */}
      <WaterIntakeStructures />
    </group>
  )
}

function TerrainBase() {
  return (
    <group>
      {/* Main terrain */}
      <mesh position={[0, -2, 0]} receiveShadow>
        <boxGeometry args={[800, 4, 600]} />
        <meshLambertMaterial color="#8B7355" />
      </mesh>

      {/* Elevated plant area */}
      <mesh position={[0, 0, 0]} receiveShadow>
        <boxGeometry args={[400, 2, 300]} />
        <meshLambertMaterial color="#A0926B" />
      </mesh>

      {/* River bank slope */}
      <mesh position={[0, -1, 280]} rotation={[-0.2, 0, 0]} receiveShadow>
        <boxGeometry args={[800, 20, 40]} />
        <meshLambertMaterial color="#7A6B47" />
      </mesh>
    </group>
  )
}

function ParanaRiver() {
  const riverRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (riverRef.current) {
      riverRef.current.material.opacity = 0.7 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group>
      {/* Main river body */}
      <mesh ref={riverRef} position={[0, -1.5, 320]} receiveShadow>
        <boxGeometry args={[800, 1, 80]} />
        <meshPhongMaterial color="#4A90E2" transparent opacity={0.7} />
      </mesh>

      {/* River flow animation effect */}
      <mesh position={[0, -1.4, 320]}>
        <planeGeometry args={[800, 80]} />
        <meshBasicMaterial color="#5BA3F5" transparent opacity={0.3} />
      </mesh>
    </group>
  )
}

function ReactorBuilding() {
  return (
    <group position={[0, 0, 0]}>
      {/* Main containment structure - cylindrical */}
      <mesh position={[0, 35, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[25, 25, 70, 16]} />
        <meshLambertMaterial color="#E8E8E8" />
      </mesh>

      {/* Reactor dome */}
      <mesh position={[0, 70, 0]} castShadow>
        <sphereGeometry args={[25, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshLambertMaterial color="#F0F0F0" />
      </mesh>

      {/* Secondary containment */}
      <mesh position={[0, 30, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[30, 30, 60, 16]} />
        <meshLambertMaterial color="#D0D0D0" />
      </mesh>

      {/* Base structure */}
      <mesh position={[0, 5, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[35, 35, 10, 16]} />
        <meshLambertMaterial color="#C0C0C0" />
      </mesh>

      {/* Reactor building label */}
      <Text position={[0, 85, 0]} fontSize={8} color="#333333" anchorX="center" anchorY="middle">
        Reactor Building
      </Text>
    </group>
  )
}

function CoolingTowers() {
  return (
    <group>
      {/* Primary cooling tower */}
      <mesh position={[-80, 50, -40]} castShadow receiveShadow>
        <cylinderGeometry args={[15, 25, 100, 12]} />
        <meshLambertMaterial color="#F5F5F5" />
      </mesh>

      {/* Secondary cooling tower */}
      <mesh position={[-80, 50, 40]} castShadow receiveShadow>
        <cylinderGeometry args={[15, 25, 100, 12]} />
        <meshLambertMaterial color="#F5F5F5" />
      </mesh>

      {/* Steam effects */}
      <SteamEffect position={[-80, 100, -40]} />
      <SteamEffect position={[-80, 100, 40]} />
    </group>
  )
}

function SteamEffect({ position }: { position: [number, number, number] }) {
  const steamRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (steamRef.current) {
      steamRef.current.rotation.y = state.clock.elapsedTime * 0.2
      steamRef.current.material.opacity = 0.3 + Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <mesh ref={steamRef} position={position}>
      <cylinderGeometry args={[8, 3, 20, 8]} />
      <meshBasicMaterial color="#FFFFFF" transparent opacity={0.3} />
    </mesh>
  )
}

function TurbineHall() {
  return (
    <group position={[60, 0, 0]}>
      {/* Main turbine hall structure */}
      <mesh position={[0, 15, 0]} castShadow receiveShadow>
        <boxGeometry args={[80, 30, 40]} />
        <meshLambertMaterial color="#B8B8B8" />
      </mesh>

      {/* Roof structure */}
      <mesh position={[0, 30, 0]} castShadow>
        <boxGeometry args={[82, 2, 42]} />
        <meshLambertMaterial color="#A0A0A0" />
      </mesh>

      {/* Turbine hall label */}
      <Text position={[0, 35, 0]} fontSize={6} color="#333333" anchorX="center" anchorY="middle">
        Turbine Hall
      </Text>
    </group>
  )
}

function AuxiliaryBuildings() {
  return (
    <group>
      {/* Auxiliary building 1 */}
      <mesh position={[-40, 10, -60]} castShadow receiveShadow>
        <boxGeometry args={[30, 20, 25]} />
        <meshLambertMaterial color="#C8C8C8" />
      </mesh>

      {/* Auxiliary building 2 */}
      <mesh position={[40, 8, -70]} castShadow receiveShadow>
        <boxGeometry args={[25, 16, 20]} />
        <meshLambertMaterial color="#C8C8C8" />
      </mesh>

      {/* Control building */}
      <mesh position={[-20, 12, 60]} castShadow receiveShadow>
        <boxGeometry args={[35, 24, 30]} />
        <meshLambertMaterial color="#D8D8D8" />
      </mesh>

      {/* Emergency diesel generators */}
      <mesh position={[80, 6, -40]} castShadow receiveShadow>
        <boxGeometry args={[20, 12, 15]} />
        <meshLambertMaterial color="#B0B0B0" />
      </mesh>

      <mesh position={[80, 6, -20]} castShadow receiveShadow>
        <boxGeometry args={[20, 12, 15]} />
        <meshLambertMaterial color="#B0B0B0" />
      </mesh>
    </group>
  )
}

function AdministrationBuilding() {
  return (
    <group position={[-120, 0, 80]}>
      {/* Main admin building */}
      <mesh position={[0, 15, 0]} castShadow receiveShadow>
        <boxGeometry args={[40, 30, 25]} />
        <meshLambertMaterial color="#E0E0E0" />
      </mesh>

      {/* Windows simulation */}
      <mesh position={[20.1, 15, 0]} castShadow>
        <boxGeometry args={[0.2, 25, 20]} />
        <meshLambertMaterial color="#4A90E2" />
      </mesh>

      <mesh position={[-20.1, 15, 0]} castShadow>
        <boxGeometry args={[0.2, 25, 20]} />
        <meshLambertMaterial color="#4A90E2" />
      </mesh>
    </group>
  )
}

function SecurityPerimeter() {
  return (
    <group>
      {/* Security fence */}
      <mesh position={[0, 3, -120]} castShadow>
        <boxGeometry args={[300, 6, 1]} />
        <meshLambertMaterial color="#808080" />
      </mesh>

      <mesh position={[0, 3, 120]} castShadow>
        <boxGeometry args={[300, 6, 1]} />
        <meshLambertMaterial color="#808080" />
      </mesh>

      <mesh position={[-150, 3, 0]} castShadow>
        <boxGeometry args={[1, 6, 240]} />
        <meshLambertMaterial color="#808080" />
      </mesh>

      <mesh position={[150, 3, 0]} castShadow>
        <boxGeometry args={[1, 6, 240]} />
        <meshLambertMaterial color="#808080" />
      </mesh>

      {/* Guard towers */}
      <GuardTower position={[-140, 0, -110]} />
      <GuardTower position={[140, 0, -110]} />
      <GuardTower position={[-140, 0, 110]} />
      <GuardTower position={[140, 0, 110]} />
    </group>
  )
}

function GuardTower({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, 8, 0]} castShadow receiveShadow>
        <boxGeometry args={[4, 16, 4]} />
        <meshLambertMaterial color="#A0A0A0" />
      </mesh>

      <mesh position={[0, 18, 0]} castShadow receiveShadow>
        <boxGeometry args={[6, 4, 6]} />
        <meshLambertMaterial color="#909090" />
      </mesh>
    </group>
  )
}

function ElectricalInfrastructure() {
  return (
    <group>
      {/* Main transformer yard */}
      <mesh position={[120, 2, 60]} castShadow receiveShadow>
        <boxGeometry args={[60, 4, 40]} />
        <meshLambertMaterial color="#606060" />
      </mesh>

      {/* Transformers */}
      <Transformer position={[100, 4, 50]} />
      <Transformer position={[120, 4, 50]} />
      <Transformer position={[140, 4, 50]} />
      <Transformer position={[100, 4, 70]} />
      <Transformer position={[120, 4, 70]} />
      <Transformer position={[140, 4, 70]} />

      {/* Transmission towers */}
      <TransmissionTower position={[180, 0, 60]} />
      <TransmissionTower position={[220, 0, 60]} />
      <TransmissionTower position={[260, 0, 60]} />
    </group>
  )
}

function Transformer({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[8, 6, 4]} />
        <meshLambertMaterial color="#404040" />
      </mesh>
    </group>
  )
}

function TransmissionTower({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Tower structure */}
      <mesh position={[0, 25, 0]} castShadow>
        <boxGeometry args={[2, 50, 2]} />
        <meshLambertMaterial color="#707070" />
      </mesh>

      {/* Cross arms */}
      <mesh position={[0, 40, 0]} castShadow>
        <boxGeometry args={[20, 1, 1]} />
        <meshLambertMaterial color="#707070" />
      </mesh>

      <mesh position={[0, 35, 0]} castShadow>
        <boxGeometry args={[16, 1, 1]} />
        <meshLambertMaterial color="#707070" />
      </mesh>

      <mesh position={[0, 30, 0]} castShadow>
        <boxGeometry args={[12, 1, 1]} />
        <meshLambertMaterial color="#707070" />
      </mesh>
    </group>
  )
}

function Vegetation() {
  const trees = []

  // Generate random trees around the complex
  for (let i = 0; i < 150; i++) {
    const x = (Math.random() - 0.5) * 600
    const z = (Math.random() - 0.5) * 400

    // Avoid placing trees too close to buildings
    const distanceFromCenter = Math.sqrt(x * x + z * z)
    if (distanceFromCenter > 80 && distanceFromCenter < 280) {
      trees.push(<Tree key={i} position={[x, 0, z]} scale={0.5 + Math.random() * 0.8} />)
    }
  }

  return <group>{trees}</group>
}

function Tree({ position, scale }: { position: [number, number, number]; scale: number }) {
  return (
    <group position={position} scale={scale}>
      {/* Trunk */}
      <mesh position={[0, 8, 0]} castShadow>
        <cylinderGeometry args={[1, 1.5, 16, 6]} />
        <meshLambertMaterial color="#8B4513" />
      </mesh>

      {/* Foliage */}
      <mesh position={[0, 20, 0]} castShadow>
        <sphereGeometry args={[8, 8, 6]} />
        <meshLambertMaterial color="#228B22" />
      </mesh>

      <mesh position={[0, 25, 0]} castShadow>
        <sphereGeometry args={[6, 8, 6]} />
        <meshLambertMaterial color="#32CD32" />
      </mesh>
    </group>
  )
}

function RoadsAndPaths() {
  return (
    <group>
      {/* Main access road */}
      <mesh position={[0, 0.1, -180]} receiveShadow>
        <boxGeometry args={[12, 0.2, 120]} />
        <meshLambertMaterial color="#404040" />
      </mesh>

      {/* Internal roads */}
      <mesh position={[60, 0.1, 0]} receiveShadow>
        <boxGeometry args={[8, 0.2, 200]} />
        <meshLambertMaterial color="#404040" />
      </mesh>

      <mesh position={[-60, 0.1, 0]} receiveShadow>
        <boxGeometry args={[8, 0.2, 200]} />
        <meshLambertMaterial color="#404040" />
      </mesh>

      {/* Perimeter road */}
      <mesh position={[0, 0.1, 0]} receiveShadow>
        <torusGeometry args={[130, 4, 4, 16]} />
        <meshLambertMaterial color="#404040" />
      </mesh>
    </group>
  )
}

function ParkingAreas() {
  return (
    <group>
      {/* Main parking area */}
      <mesh position={[-100, 0.1, 120]} receiveShadow>
        <boxGeometry args={[60, 0.2, 40]} />
        <meshLambertMaterial color="#505050" />
      </mesh>

      {/* Secondary parking */}
      <mesh position={[100, 0.1, 100]} receiveShadow>
        <boxGeometry args={[40, 0.2, 30]} />
        <meshLambertMaterial color="#505050" />
      </mesh>

      {/* Parking lines */}
      <mesh position={[-100, 0.2, 120]} receiveShadow>
        <boxGeometry args={[58, 0.1, 1]} />
        <meshLambertMaterial color="#FFFFFF" />
      </mesh>
    </group>
  )
}

function WaterIntakeStructures() {
  return (
    <group>
      {/* Water intake building */}
      <mesh position={[0, 5, 250]} castShadow receiveShadow>
        <boxGeometry args={[30, 10, 20]} />
        <meshLambertMaterial color="#C0C0C0" />
      </mesh>

      {/* Intake pipes */}
      <mesh position={[0, 2, 270]} castShadow receiveShadow>
        <cylinderGeometry args={[2, 2, 40, 8]} />
        <meshLambertMaterial color="#808080" />
      </mesh>

      <mesh position={[-10, 2, 270]} castShadow receiveShadow>
        <cylinderGeometry args={[2, 2, 40, 8]} />
        <meshLambertMaterial color="#808080" />
      </mesh>

      <mesh position={[10, 2, 270]} castShadow receiveShadow>
        <cylinderGeometry args={[2, 2, 40, 8]} />
        <meshLambertMaterial color="#808080" />
      </mesh>

      {/* Discharge structure */}
      <mesh position={[50, 3, 280]} castShadow receiveShadow>
        <boxGeometry args={[15, 6, 10]} />
        <meshLambertMaterial color="#B0B0B0" />
      </mesh>
    </group>
  )
}
