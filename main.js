import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const cube_geometry = new THREE.BoxGeometry( 1, 1, 1 );
const cube_material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( cube_geometry, cube_material );
scene.add( cube );

const line_material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
const line_points = [];
line_points.push( new THREE.Vector3( - 10, 0, 0 ) );
line_points.push( new THREE.Vector3( 0, 10, 0 ) );
line_points.push( new THREE.Vector3( 10, 0, 0 ) );
const line_geometry = new THREE.BufferGeometry().setFromPoints( line_points );
const line = new THREE.Line( line_geometry, line_material );
scene.add( line );

camera.position.z = 5;

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

if (WebGL.isWebGL2Available()) {
    renderer.setAnimationLoop( animate );
} else {
    const warning = WebGL.getWebGL2ErrorMessage();
    document.getElementById('container').appendChild(warning);
}
