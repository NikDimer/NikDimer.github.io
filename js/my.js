var camera, scene, renderer, controls;
var geometry, material;

init();
animate();

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}  

function init() {

    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 1000);
    camera.position.y = 5;
    camera.position.z = 0;
    camera.position.x = 0;

    scene = new THREE.Scene();
    var geometry = new THREE.BoxGeometry();
        var textureLoader = new THREE.TextureLoader();
        textureLoader.setPath('textures/' + 'texture' + '/');
        var sp;
        sp = sborka();

        var textureTop = textureLoader.load(sp[0] + '.jpg');
        var textureBottom = textureLoader.load(sp[1] + '.jpg');
        var textureSide1 = textureLoader.load(sp[2] + '.jpg');
        var textureSide2 = textureLoader.load(sp[3] + '.jpg');
        var textureSide3 = textureLoader.load(sp[4] + '.jpg');
        var textureSide4 = textureLoader.load(sp[5] + '.jpg');
        var material = [
            new THREE.MeshBasicMaterial({ map: textureSide1 }),
            new THREE.MeshBasicMaterial({ map: textureSide2 }),
            new THREE.MeshBasicMaterial({ map: textureTop }),
            new THREE.MeshBasicMaterial({ map: textureBottom }),
            new THREE.MeshBasicMaterial({ map: textureSide3 }),
            new THREE.MeshBasicMaterial({ map: textureSide4 })
        ];

    //var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    controls = new THREE.OrbitControls (camera, renderer.domElement);
    //controls = new THREE.OrbitControls(camera);
    //controls = new THREE.PointerLockControls(camera);
    //controls.unlock();
    //scene.add(controls.getObject());
}

function animate() {

    requestAnimationFrame(animate);
    controls.update();
    // mesh.rotation.x += 0.01;
    // mesh.rotation.y += 0.02;

    renderer.render(scene, camera);

}

function sborka() {
    var mas;
    ch = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
    mas = [];
    t = getRandomInRange(1, 20);
    mas.push(ch[t]);
    delete ch[t];
    t = getRandomInRange(1, 19);
    mas.push(ch[t]);
    delete ch[t];
    t = getRandomInRange(1, 18);
    mas.push(ch[t]);
    delete ch[t];
    t = getRandomInRange(1, 17);
    mas.push(ch[t]);
    delete ch[t];
    t = getRandomInRange(1, 16);
    mas.push(ch[t]);
    delete ch[t];
    t = getRandomInRange(1, 15);
    mas.push(ch[t]);
    delete ch[t];
    return mas;
}
