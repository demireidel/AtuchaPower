"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sky } from "@react-three/drei"
import { Suspense } from "react"
import { AtuchaIIComplex } from "@/components/atucha-ii-complex"

export default function AtuchaIIViewer() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-sky-200 to-sky-100">
      <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Atucha II Nuclear Power Plant</h1>
        <p className="text-sm text-gray-600 mb-2">Lima, Buenos Aires Province, Argentina</p>
        <div className="text-xs text-gray-500 space-y-1">
          <p>• Mouse: Rotate view</p>
          <p>• Scroll: Zoom in/out</p>
          <p>• Right-click + drag: Pan</p>
        </div>
      </div>

      <Canvas
        camera={{
          position: [200, 100, 200],
          fov: 60,
          near: 0.1,
          far: 2000,
        }}
        shadows
      >
        <Suspense fallback={null}>
          {/* Lighting setup */}
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[100, 200, 100]}
            intensity={1.2}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-far={1000}
            shadow-camera-left={-200}
            shadow-camera-right={200}
            shadow-camera-top={200}
            shadow-camera-bottom={-200}
          />

          {/* Sky and environment */}
          <Sky distance={450000} sunPosition={[100, 20, 100]} inclination={0} azimuth={0.25} />

          {/* Main complex */}
          <AtuchaIIComplex />

          {/* Camera controls */}
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={50}
            maxDistance={800}
            maxPolarAngle={Math.PI / 2.2}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
