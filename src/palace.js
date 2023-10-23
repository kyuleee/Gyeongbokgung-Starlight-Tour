import * as THREE from 'three';
import { useRef,useEffect } from 'react';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import model from './img/TEAM2.glb'


const Palace = () => {
    const main = useRef()
    useEffect(() => {  
        const mainCur = main.current
    //render
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true 
    });
    renderer.setSize(mainCur.clientWidth,  mainCur.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
  
    // document.body.innerHTML="";
    mainCur.appendChild(renderer.domElement);

    //scene
    const scene = new THREE.Scene();

    //camera
    const camera = new THREE.PerspectiveCamera(
        115,
        window.innerWidth / window.innerHeight,
        0.25,
        100
    );
    camera.position.z = 6;
    camera.position.y = -2.3;
    camera.position.x = 0;
    scene.add(camera)

    //light 글씨 쏴주는 불빛
    const PointLight = new THREE.PointLight( "whtie", 16 );
    PointLight.position.Z= 8; 
    PointLight.position.x= -1.0; 
    PointLight.position.y=3.8; //default; light shining from top
    PointLight.castShadow = true; // default false
    scene.add( PointLight );
    
    // 글씨 서브 불빛
    const PointLight2 = new THREE.PointLight( "yellow", 50);
    PointLight2.position.z=1; 
    PointLight2.position.x=-0.5; 
    PointLight2.position.y=4.8;
    PointLight2.castShadow = true; // default false
    
    // 땅바닥 왼쪽 불빛
    scene.add( PointLight2 );
    const light = new THREE.PointLight( "yellow", 50);
    light.position.z= 3; 
    light.position.x= 0; 
    light.position.y= 0; 
    light.castShadow = true; // default false
    scene.add( light );
    
  
    //1층 오른쪽 불빛
    // const light6 = new THREE.PointLight( "whtie", 15);
    // light6.position.z= 0.5; 
    // light6.position.x= 0; 
    // light6.position.y= -2;
    // light6.castShadow = true; // default false
    // scene.add( light6 );

    const light2 = new THREE.PointLight( "whtie", 15);
    light2.position.z= 1.7; 
    light2.position.x= 0; 
    light2.position.y= -2.5;
    light2.castShadow = true; // default false
    scene.add( light2 );

    const light3 = new THREE.PointLight( "whtie", 10);
    light3.position.z= 1.7; 
    light3.position.x= -2; 
    light3.position.y= -3.5;
    light3.castShadow = true; // default false
    scene.add( light3 );

    const light4 = new THREE.PointLight( "whtie", 10);
    light4.position.z= 1.7; 
    light4.position.x= 2; 
    light4.position.y= -3.5;
    light4.castShadow = true; // default false
    scene.add( light4 );





    //Set up shadow properties for the light
    light.shadow.mapSize.width = 512; // default
    light.shadow.mapSize.height = 512; // default
    light.shadow.camera.near = 0.5; // default
    light.shadow.camera.far = 500; // default


    //마우스로 움직에 할 수 있음
    const controls = new OrbitControls( camera, renderer.domElement );

    //GLTF Loader
    let mixer;
    
    const gltfLoader = new GLTFLoader();
    gltfLoader.load(model, (gltf)=>{
        const imgs = gltf.scene.children[0];
        scene.add(imgs)
        imgs.position.z = 0;
        imgs.position.x = 0;
        imgs.position.y = 0.7;
        imgs.castShadow = true; //default is false
        imgs.receiveShadow = false; //default
        mixer = new THREE.AnimationMixer()
        const actions = [];
        actions[0] = mixer.clipAction(imgs.animation[0]);
        actions[1] = mixer.clipAction(imgs.animation[1]);
        actions[2] = mixer.clipAction(imgs.animation[2]);
 
    })


    //애니메이션
    const clock = new THREE.Clock();
    const animate = ()=>{
        const time = clock.getElapsedTime();
        controls.update()
        controls.minDistance =4;
        controls.maxDistance =6;
        controls.rotateSpeed = 0.5;
        controls.zoomSpeed = 0.5;
        if(mixer) mixer.update(time);
        renderer.render(scene,camera);
        renderer.setAnimationLoop(animate)
    }
    animate()

    renderer.render(scene, camera)

    window.addEventListener('resize', ()=>{
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(mainCur.clientWidth, mainCur.clientHeight);
        renderer.render(scene,camera);
    });
 })
    return ( 
        <div className='palace' ref={main}></div>
     );
}
 
export default Palace;