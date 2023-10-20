import * as THREE from 'three';
import { useRef,useEffect } from 'react';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import model from './img/TEAM.glb'


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
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        100
    );
    camera.position.z = 6;
    camera.position.y = -2.5;
    camera.position.x = 0;
        scene.add(camera)

    //light
    const PointLight = new THREE.PointLight( "#FFFF66", 14 );
    PointLight.position.Z= 1; 
    PointLight.position.x= -0.5; 
    PointLight.position.y=4.3; //default; light shining from top
    PointLight.castShadow = true; // default false
    scene.add( PointLight );
    const PointLight2 = new THREE.PointLight( "#FFFF66", );
    PointLight2.position.z=2; 
    PointLight2.position.x=-0.5; 
    PointLight2.position.y=4.3;
    PointLight2.castShadow = true; // default false
    scene.add( PointLight2 );
    const light = new THREE.PointLight( "#FFFF66", 2 );
    light.position.z= 3; 
    light.position.x= -3; 
    light.position.y= -2; 
    light.castShadow = true; // default false
    scene.add( light );
    const light2 = new THREE.PointLight( "#FFFF66", 2 );
    light2.position.z= 2; 
    light2.position.x= -1.7; 
    light2.position.y= -1.4; 
    light2.castShadow = true; // default false
    scene.add( light2 );
    const light3 = new THREE.PointLight( "#FFFF66", 6.5);
    light3.position.z= 2.2; 
    light3.position.x= 0; 
    light3.position.y= -1.2;
    light3.castShadow = true; // default false
    scene.add( light3 );
    const light4 = new THREE.PointLight( "#FFFF66", 6.5);
    light4.position.z= 2; 
    light4.position.x= 1.7; 
    light4.position.y= -1.4; 
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
        console.log(gltf)
        const imgs = gltf.scene.children[0];
        scene.add(imgs)
        imgs.position.z = 1;
        imgs.position.y = 1.7;
        imgs.castShadow = true; //default is false
        imgs.receiveShadow = false; //default
        mixer = new THREE.AnimationMixer()
        const actions = [];
        actions[0] = mixer.clipAction(imgs.animation[0]);
        actions[1] = mixer.clipAction(imgs.animation[1]);
        actions[2] = mixer.clipAction(imgs.animation[2]);
 
    })



    //mesh
    // const gemetry = new THREE.BoxGeometry(1,1,1)
    // const material = new THREE.MeshStandardMaterial({
    //     color : 'red'
    // }) 
    // const mesh = new THREE.Mesh(gemetry, material)
    // scene.add(mesh);

    //애니메이션
    const clock = new THREE.Clock();
    const animate = ()=>{
        const time = clock.getElapsedTime();
        // mesh.rotation.y = time;
        // mesh.scale.set(1,1,1)
        controls.update()
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
        <section className='palace' ref={main}></section>
     );
}
 
export default Palace;