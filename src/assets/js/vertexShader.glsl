uniform float time;
varying vec2 vUv;

void main() {
    vUv = uv;
    vec3 pos = position;
    float dist = distance(uv, vec2(0.5, 0.5));
    pos.z += sin(dist * 10.0 - time * 5.0) * 0.1;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}