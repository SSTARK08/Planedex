//Variables for setup
let container;
let camera;
let renderer;
let scene;
let earth;

function init() {
    "use strict";
    container = document.querySelector('.scene');
    //Create scene
    scene = new THREE.Scene();
    const fov = 48;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.9;
    const far = 1000;
    //camera setup
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 0, 400);
    const ambient = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambient);
    //add directional light
    const light = new THREE.DirectionalLight(0xffffff,4);
    light.position.set(20, 0, 0);
    light.target.position.set(0, 0, 1.8);
    scene.add(light);
    scene.add(light.target);
    //renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
//load model
    let loader = new THREE.GLTFLoader();
    loader.load('./3d/scene.gltf', function(gltf) {
        scene.add(gltf.scene);
        earth = gltf.scene.children[0];
        animate();
    });
}
function animate() {
    requestAnimationFrame(animate);
    earth.rotation.z -=0.002;
    renderer.render(scene, camera);
}
init();
function onWindowResize(){
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}
window.addEventListener("resize",onWindowResize);