'use client'

import {
  Color3,
  Engine,
  Scene,
  SceneLoader
} from '@babylonjs/core'
import '@babylonjs/loaders/glTF'
import { useEffect, useRef } from 'react'

const Model3D = () => {
  const reactCanvas = useRef(null)
  let box: any

  const onSceneReady = (scene: Scene) => {
    scene.createDefaultCameraOrLight(true, true, true)

    SceneLoader.Append('/', 'LittlestTokyo.glb', scene, scene => {
      // Create a camera pointing at your model.
      scene.createDefaultCameraOrLight(true, true, true)

      const helper = scene.createDefaultEnvironment()
      helper?.setMainColor(Color3.Teal())
    })
  }

  const onRender = (scene: Scene) => {
    if (box !== undefined) {
      const deltaTimeInMillis = scene.getEngine().getDeltaTime()

      const rpm = 10
      box.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000)
    }
  }

  useEffect(() => {
    const { current: canvas } = reactCanvas
    if (!canvas) return

    const engine = new Engine(canvas, true, undefined, true)
    const scene = new Scene(engine, undefined)
    if (scene.isReady()) {
      onSceneReady(scene)
    } else {
      scene.onReadyObservable.addOnce(scene => onSceneReady(scene))
    }

    engine.runRenderLoop(() => {
      if (typeof onRender === 'function') onRender(scene)
      scene.render()
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
