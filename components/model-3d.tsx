'use client'

import {
  ArcRotateCamera,
  Color3,
  Color4,
  Engine,
  HemisphericLight,
  MeshBuilder,
  Scene,
  SceneLoader,
  Sound,
  StandardMaterial,
  Texture,
  Vector3,
  Vector4
} from '@babylonjs/core'
import { useEffect, useRef } from 'react'

const Model3D = () => {
  const reactCanvas = useRef(null)

  useEffect(() => {
    const canvas = reactCanvas.current
    const engine = new Engine(canvas, true)

    const buildGround = () => {
      const ground = MeshBuilder.CreateGround('ground', {
        width: 10,
        height: 10
      })
    }

    const buildBox = () => {
      //texture
      const boxMat = new StandardMaterial('boxMat')
      boxMat.diffuseTexture = new Texture(
        'https://assets.babylonjs.com/environments/cubehouse.png'
      )

      //options parameter to set different images on each side
      const faceUV = []
      faceUV[0] = new Vector4(0.5, 0.0, 0.75, 1.0) //rear face
      faceUV[1] = new Vector4(0.0, 0.0, 0.25, 1.0) //front face
      faceUV[2] = new Vector4(0.25, 0, 0.5, 1.0) //right side
      faceUV[3] = new Vector4(0.75, 0, 1.0, 1.0) //left side
      // top 4 and bottom 5 not seen so not set

      /**** World Objects *****/
      const box = MeshBuilder.CreateBox('box', {
        faceUV: faceUV,
        wrap: true
      })
      box.material = boxMat
      box.position.y = 0.5

      return box
    }

    const buildRoof = () => {
      //texture
      const roofMat = new StandardMaterial('roofMat')
      roofMat.diffuseTexture = new Texture(
        'https://assets.babylonjs.com/environments/roof.jpg'
      )

      const roof = MeshBuilder.CreateCylinder('roof', {
        diameter: 1.3,
        height: 1.2,
        tessellation: 3
      })
      roof.material = roofMat
      roof.scaling.x = 0.75
      roof.rotation.z = Math.PI / 2
      roof.position.y = 1.22

      return roof
    }

    const createScene = function () {
      const scene = new Scene(engine)
      scene.clearColor = new Color4(0, 0, 0, 0)

      /**** Set camera and light *****/
      const camera = new ArcRotateCamera(
        'camera',
        -Math.PI / 2,
        Math.PI / 2.5,
        10,
        new Vector3(0, 0, 0)
      )
      camera.attachControl(canvas, true)
      const light = new HemisphericLight('light', new Vector3(1, 1, 0))

      const ground = buildGround()
      const box = buildBox()
      const roof = buildRoof()

      return scene
    }

    engine.runRenderLoop(function () {
      scene.render()
    })

    // Watch for browser/canvas resize events
    window.addEventListener('resize', function () {
      engine.resize()
    })

    const scene = createScene()
  }, [])

  return (
    <canvas
      style={{ width: '100%', outline: 'none' }}
      ref={reactCanvas}
    ></canvas>
  )
}

export default Model3D
