import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
class index3D {
  constructor(selector) {
    this.container = document.querySelector(selector);
    this.camera;
    this.scene;
    this.renderer;
    this.initall();
    this.animate();
  }
  initall() {
    this.intiScene();
    this.intiCamera();
    this.initRenderer();
    this.initControls();
    this.addMesh();
    this.initLight();
    window.addEventListener("resize", this.onWindowResize.bind(this));
  }
  intiScene() {
    this.scene = new THREE.Scene();
    this.setEnvMap("0");
  }
  intiCamera() {
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.25,
      200
    );
    this.camera.position.set(18, 18, 40);
  }
  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.container.appendChild(this.renderer.domElement);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 2;
  }
  setEnvMap(hdr) {
    new RGBELoader()
      .setPath("./product/")
      .load("scene" + hdr + ".hdr", (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        this.scene.background = texture;
        this.scene.environment = texture;
      });
  }
  render() {
    this.renderer.render(this.scene, this.camera);
  }
  animate() {
    this.renderer.setAnimationLoop(this.render.bind(this));
  }
  initControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableZoom = false;
  }
  initLight() {
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    //this.directionalLight.position(0, 3, 0);
    this.scene.add(directionalLight);
  }
  setModel(modelName) {
    const load = new GLTFLoader().setPath("./product/");
    load.load("model" + modelName + ".glb", (gltf) => {
      this.model && this.model.removeFromParent();
      this.model = gltf.scene;
      this.scene.add(this.model);
      //this.resolve(this.modelName + "模型添加成功");
    });
  }
  addMesh() {
    this.setModel("0");
  }
  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
export default index3D;
