var camera, scene, renderer, controls;
var geometry, material;

init();
var geometry = new THREE.BoxGeometry( 80, 80, 1);

var textureLoader = new THREE.TextureLoader();
textureLoader.setPath('textures/' + 'vrata' + '/');

var textureTop = textureLoader.load('vrata.jpg');
var textureSide = textureLoader.load('vrata.jpg');
var textureBottom = textureLoader.load('vrata.jpg');

var material = [
    new THREE.MeshBasicMaterial({ map: textureSide }),
    new THREE.MeshBasicMaterial({ map: textureSide }),
    new THREE.MeshBasicMaterial({ map: textureTop }),
    new THREE.MeshBasicMaterial({ map: textureBottom }),
    new THREE.MeshBasicMaterial({ map: textureSide }),
    new THREE.MeshBasicMaterial({ map: textureSide })
];

var cube1 = new THREE.Mesh( geometry, material );
scene.add( cube1 );
cube1.position.x -= 40;

var textureTop = textureLoader.load('vrata1.jpg');
var textureSide = textureLoader.load('vrata1.jpg');
var textureBottom = textureLoader.load('vrata1.jpg');

var material = [
    new THREE.MeshBasicMaterial({ map: textureSide }),
    new THREE.MeshBasicMaterial({ map: textureSide }),
    new THREE.MeshBasicMaterial({ map: textureTop }),
    new THREE.MeshBasicMaterial({ map: textureBottom }),
    new THREE.MeshBasicMaterial({ map: textureSide }),
    new THREE.MeshBasicMaterial({ map: textureSide })
];

var cube2 = new THREE.Mesh( geometry, material );
scene.add( cube2 );
cube2.position.x += 40;
k = -500
animate();

function init() {

    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 1000);
    camera.position.y = 1;
    camera.position.z = 0;
    camera.position.x = 0;

    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    //controls = new THREE.OrbitControls(camera);
    controls = new THREE.PointerLockControls(camera);
    controls.unlock();
    scene.add(controls.getObject());

    

    camera.position.z = 25;
}

function animate() {

    requestAnimationFrame(animate);

    playerControls();
    if (k < 240 & k > 0) {
        cube1.rotation.y += 0.01;
        cube1.position.z -= 0.044;
        cube1.position.x -= 0.044;

        cube2.rotation.y -= 0.01;
        cube2.position.z -= 0.044;
        cube2.position.x += 0.044;

        k += 1;
    }

    if (k < 1) {
        k += 1;
    }

    renderer.render(scene, camera);

}

function playerControls() {
    if (controls.controlsEnabled) {
        if (controls.moveForward) {
            controls.getObject().position.translateZ(1);
        }
    }
}
