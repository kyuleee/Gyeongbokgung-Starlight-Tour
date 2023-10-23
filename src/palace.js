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

    //light 글씨 쏴주는 불빛
    const PointLight = new THREE.PointLight( "#FFFF66", 14 );
    PointLight.position.Z= 1; 
    PointLight.position.x= -0.5; 
    PointLight.position.y=4.3; //default; light shining from top
    PointLight.castShadow = true; // default false
    scene.add( PointLight );

    // 글씨 서브 불빛
    const PointLight2 = new THREE.PointLight( "red", 50);
    PointLight2.position.z=2; 
    PointLight2.position.x=-0.5; 
    PointLight2.position.y=4.3;
    PointLight2.castShadow = true; // default false
    
    // 땅바닥 왼쪽 불빛
    scene.add( PointLight2 );
    const light = new THREE.PointLight( "#FFFF66", 2 );
    light.position.z= 3; 
    light.position.x= -3; 
    light.position.y= -2; 
    light.castShadow = true; // default false
    scene.add( light );
    
    // 2층 왼쪽 불빛
    const light2 = new THREE.PointLight( "#33ffff", 1 );
    light2.position.z= 2; 
    light2.position.x= -1.7; 
    light2.position.y= -1.4; 
    light2.castShadow = true; // default false
    scene.add( light2 );

    //2층 중앙 불빛
    const light3 = new THREE.PointLight( "#33ffff", 1);
    light3.position.z= 2.2; 
    light3.position.x= 0; 
    light3.position.y= -1.2;
    light3.castShadow = true; // default false
    scene.add( light3 );

    //2층 오른쪽 불빛
    const light4 = new THREE.PointLight( "#33ffff", 1);
    light4.position.z= 2; 
    light4.position.x= 1.2; 
    light4.position.y= -1.4; 
    light4.castShadow = true; // default false
    scene.add( light4 );

    //1층 왼쪽 불빛
    const light5 = new THREE.PointLight( "green", 6.5);
    light5.position.z= 2.2; 
    light5.position.x= -1.2; 
    light5.position.y= -2;
    light5.castShadow = true; // default false
    scene.add( light5 );

    //1층 오른쪽 불빛
    const light6 = new THREE.PointLight( "green", 6.5);
    light6.position.z= 2.2; 
    light6.position.x= 1.2; 
    light6.position.y= -2;
    light6.castShadow = true; // default false
    scene.add( light6 );



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


    //애니메이션
    const clock = new THREE.Clock();
    const animate = ()=>{
        const time = clock.getElapsedTime();
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
        <div className='palace' ref={main}></div>
     );
}
 
export default Palace;