'use client'

import { Color4, Engine, Scene, SceneLoader } from '@babylonjs/core'
import '@babylonjs/loaders/glTF'
import { useEffect, useRef } from 'react'

const Model3D = () => {
  const reactCanvas = useRef(null)

  const onSceneReady = (scene: Scene, engine: Engine) => {
    scene.clearColor = new Color4(0, 0, 0, 0)

    SceneLoader.Append('/', 'LittlestTokyo.glb', scene, scene => {
      scene.createDefaultCameraOrLight(true, true, true)
    })

    SceneLoader.ShowLoadingScreen = false
  }

  useEffect(() => {
    const { current: canvas } = reactCanvas
    if (!canvas) return

    const engine = new Engine(canvas, true, undefined, true)
    const scene = new Scene(engine, undefined)

    scene.createDefaultCameraOrLight(true, true, true)

    onSceneReady(scene, engine)

    engine.runRenderLoop(() => {
      if (scene) {
        scene.render()
      }
    })

    const resize = () => {
      scene.getEngine().resize()
    }

    if (window) {
      window.addEventListener('resize', resize)
    }

    return () => {
      scene.getEngine().dispose()

      if (window) {
        window.removeEventListener('resize', resize)
      }
    }
  }, [])

  return (
    <canvas
      style={{ width: '100%', height: '100%', outline: 'none' }}
      ref={reactCanvas}
      id="my-canvas"
    />
  )
}

export default Model3D
