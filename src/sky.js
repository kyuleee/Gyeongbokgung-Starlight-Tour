import * as THREE from 'three';
import { useRef,useEffect } from 'react';


function Sky(){

    const sky = useRef();
      
    useEffect(()=>{
        const skys = sky.current
        // Scene
        const scene = new THREE.Scene();

        //size
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight,
        };
        //camera
        const camera = new THREE.PerspectiveCamera(
            75,
            sizes.width / sizes.height,
            0.1,
            100
        );
        camera.position.z = 2;
        scene.add(camera);
        //renderer
        
        const renderer = new THREE.WebGLRenderer({
            canvas: document.createElement("canvas"),
            antialias: true,
            alpha: true 
        });

        const light = new THREE.DirectionalLight( "whtie", 50);
        light.position.set( 0, 1, 0 ); //default; light shining from top
        light.castShadow = true; // default false
        scene.add( light );

        //Set up shadow properties for the light
        light.shadow.mapSize.width = 512; // default
        light.shadow.mapSize.height = 512; // default
        light.shadow.camera.near = 0.5; // default
        light.shadow.camera.far = 500; // default

        
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0.0);
        
        skys.appendChild(renderer.domElement);

        window.addEventListener("resize", () => {
            // Update sizes
            sizes.width = skys.clientWidth;
            sizes.height = skys.clientHeight;

            // Update camera
            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();

            // Update renderer
            renderer.setSize(sizes.width, sizes.height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        });
        // Objects

        //particle
        const particlesGeometry = new THREE.BufferGeometry();

        // let canvas2 = document.getElementById("myCanvas");
        // let ctx = canvas2.getContext("2d");
        
        // ctx.fillRect(0, 0, window.innerWidth,window.innerheight);

        const particlesmaterial = new THREE.PointsMaterial({
            size: 0.008,
            transparent: true,
        });
        //별 외형?
        const particlesCnt = 500;
        //별 갯수
        const posArray = new Float32Array(particlesCnt * 3);
        //별갯수x3
        // xyz,xyz,xyz , xyz
        for (let i = 0; i < particlesCnt * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * (Math.random() * 30);
        }

        particlesGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(posArray, 3)
        );

        const particlesMesh = new THREE.Points(particlesGeometry, particlesmaterial);
        scene.add(particlesMesh);

        //mouse
        document.addEventListener("mousemove", animateParticles);

        let mouseX = 1;
        let mouseY = 1;

        function animateParticles(event) {
            mouseY = event.clientY;
            mouseX = event.clientX;
        }

        const clock = new THREE.Clock();

        const animate = () => {
            window.requestAnimationFrame(animate);

            const elapsedTime = clock.getElapsedTime();
            // Update objects
            particlesMesh.rotation.y = -1 * (elapsedTime * 0.1);
            particlesMesh.rotation.x = 1 * (elapsedTime * 0.1);
            particlesMesh.rotation.z = 0 * (elapsedTime * 0.1);
            if (mouseX > 0) {
            particlesMesh.rotation.x = -mouseY * (elapsedTime * 0.00008);
            particlesMesh.rotation.y = -mouseX * (elapsedTime * 0.00008);
            }

            renderer.render(scene, camera);
        };

    animate();

  })

  return(
    
    <section id="myCanvas" ref={sky}>

    </section>

  );

} 


export default Sky;

