var camera, scene, renderer, controls;
var geometry, material;

function getRandom(min, max){
    return (Math.floor(Math.random() * (max - min + 1)) + min).toFixed();
}

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

var geometry = new THREE.SphereGeometry(3, 4, 4);
var material = new THREE.MeshNormalMaterial();
var sphere = new THREE.Mesh( geometry, material );
sphere.position.z -= 30;
scene.add( sphere );

var light = new THREE.DirectionalLight( 0xffffff );
light.position.z += 5;
light.position.y += 1;
light.intensity = 3;
console.log(light)
scene.add(light);

var geometry = new THREE.SphereGeometry(6, 32, 32);
var material = new THREE.MeshLambertMaterial({color: 0x0000ff, transparent: true, opacity: 0.3});
var sphere1 = new THREE.Mesh( geometry, material );
sphere1.position.z -= 30;
scene.add( sphere1 );

var geometry = new THREE.BoxGeometry( 12, 12, 12 );
var edges = new THREE.EdgesGeometry( geometry );
var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
line.position.z -= 30;
console.log(line);
scene.add( line );

var geometry = new THREE.OctahedronGeometry(13, 1);
var edges = new THREE.EdgesGeometry( geometry );
var line1 = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
line1.position.z -= 30;
scene.add( line1 );

var geometry = new THREE.BoxGeometry(30, 30, 0.01);
var textureLoader = new THREE.TextureLoader();
textureLoader.setPath('textures/' + 'magic' + '/');
var texture = textureLoader.load('1.jpg');
var material = [
    new THREE.MeshBasicMaterial({ map: texture }),
    new THREE.MeshBasicMaterial({ map: texture }),
    new THREE.MeshBasicMaterial({ map: texture }),
    new THREE.MeshBasicMaterial({ map: texture }),
    new THREE.MeshBasicMaterial({ map: texture }),
    new THREE.MeshBasicMaterial({ map: texture })
];
var plane = new THREE.Mesh( geometry, material );
plane.position.z -= 50;
plane.position.x += getRandom(-40, 40);
plane.position.y += 90;
scene.add( plane );
var plane1 = new THREE.Mesh( geometry, material );
plane1.position.z -= 50;
plane1.position.x += getRandom(-40, 40);
plane1.position.y += 250;
scene.add( plane1 );
var plane2 = new THREE.Mesh( geometry, material );
plane2.position.z -= 50;
plane2.position.x += getRandom(-40, 40);
plane2.position.y += 370;
scene.add( plane2 );

var geometry = new THREE.BoxGeometry(30, 30, 0.01);
var textureLoader = new THREE.TextureLoader();
textureLoader.setPath('textures/' + 'magic' + '/');
var texture = textureLoader.load('2.jpg');
var material = [
    new THREE.MeshBasicMaterial({ map: texture }),
    new THREE.MeshBasicMaterial({ map: texture }),
    new THREE.MeshBasicMaterial({ map: texture }),
    new THREE.MeshBasicMaterial({ map: texture }),
    new THREE.MeshBasicMaterial({ map: texture }),
    new THREE.MeshBasicMaterial({ map: texture })
];
var plane3 = new THREE.Mesh( geometry, material );
plane3.position.z -= 50;
plane3.position.x += getRandom(-40, 40);
plane3.position.y += 130;
scene.add( plane3 );
var plane4 = new THREE.Mesh( geometry, material );
plane4.position.z -= 50;
plane4.position.x += getRandom(-40, 40);
plane4.position.y += 170;
scene.add( plane4 );
var plane5 = new THREE.Mesh( geometry, material );
plane5.position.z -= 50;
plane5.position.x += getRandom(-40, 40);
plane5.position.y += 290;
scene.add( plane5 );
var plane6 = new THREE.Mesh( geometry, material );
plane6.position.z -= 50;
plane6.position.x += getRandom(-40, 40);
plane6.position.y += 410;
scene.add( plane6 );

var geometry = new THREE.BoxGeometry(30, 30, 0.01);
var textureLoader = new THREE.TextureLoader();
textureLoader.setPath('textures/' + 'magic' + '/');
var texture = textureLoader.load('3.jpg');
var material = [
    new THREE.MeshBasicMaterial({ map: texture }),
    new THREE.MeshBasicMaterial({ map: texture }),
    new THREE.MeshBasicMaterial({ map: texture }),
    new THREE.MeshBasicMaterial({ map: texture }),
    new THREE.MeshBasicMaterial({ map: texture }),
    new THREE.MeshBasicMaterial({ map: texture })
];
var plane7 = new THREE.Mesh( geometry, material );
plane7.position.z -= 50;
plane7.position.x -= getRandom(-40, 40);
plane7.position.y += 210;
scene.add( plane7 );
var plane8 = new THREE.Mesh( geometry, material );
plane8.position.z -= 50;
plane8.position.x -= getRandom(-40, 40);
plane8.position.y += 450;
scene.add( plane8 );
var plane9 = new THREE.Mesh( geometry, material );
plane9.position.z -= 50;
plane9.position.x -= getRandom(-40, 40);
plane9.position.y += 330;
scene.add( plane9 );

k = -500;
k1 = 0;
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

    if (k1 >= 500 & k1 < 1001) {
        if (k1 % 100 === 0)
        var geometry = new THREE.SphereGeometry(3 + ((k1 - 500) / 500 * 3), 4 + ((k1 - 500) / 100 * 2), 4 + ((k1 - 500) / 100 * 2));
        var material = new THREE.MeshNormalMaterial();
        if (k1 == 600) {
            var sphere2 = new THREE.Mesh( geometry, material );
            sphere2.position.z -= 30;
            scene.add( sphere2 );
            sphere1.radius -= 0.4;
        }
        if (k1 == 700) {
            var sphere3 = new THREE.Mesh( geometry, material );
            sphere3.position.z -= 30;
            scene.add( sphere3 );
            sphere1.geometry.radius -= 0.4;
        }
        if (k1 == 800) {
            var sphere4 = new THREE.Mesh( geometry, material );
            sphere4.position.z -= 30;
            scene.add( sphere4 );
            sphere1.geometry.radius -= 0.4;
        }
        if (k1 == 900) {
            var sphere5 = new THREE.Mesh( geometry, material );
            sphere5.position.z -= 30;
            scene.add( sphere5 );
            sphere1.geometry.radius -= 0.4;
        }
        if (k1 == 1000) {
            var sphere6 = new THREE.Mesh( geometry, material );
            sphere6.position.z -= 30;
            scene.add( sphere6 );
            sphere1.geometry.radius -= 0.4;
        }
        k1 += 1;
    }

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
    if (k1 < 500) {
        sphere.rotation.x += 0.02;
        sphere.rotation.z += 0.02;
    }

    line.rotation.y += 0.01;
    line.rotation.z += 0.01;

    line1.rotation.y += 0.03;
    line1.rotation.z += 0.03;
    

    if (k == 240 & k1 < 500) {
        k1 += 1;
    }

    if (k1 > 1000) {
        line.visible = false;
        line1.visible = false;
        
        if (k1 < 1700) {
            plane.position.y -= 1;
            plane1.position.y -= 1;
            plane2.position.y -= 1;
            plane3.position.y -= 1;
            plane4.position.y -= 1;
            plane5.position.y -= 1;
            plane6.position.y -= 1;
            plane7.position.y -= 1;
            plane8.position.y -= 1;
            plane9.position.y -= 1;
        }
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
