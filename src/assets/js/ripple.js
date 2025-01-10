// ripple.js

import {
  Curtains,
  Vec2,
  PingPongPlane,
  ShaderPass,
} from "https://cdn.jsdelivr.net/npm/curtainsjs@8.1.2/src/index.mjs";
function ripple() {
  const ripplesVs = `
        #ifdef GL_FRAGMENT_PRECISION_HIGH
        precision highp float;
        #else
        precision mediump float;
        #endif

        // default mandatory variables
        attribute vec3 aVertexPosition;
        attribute vec2 aTextureCoord;

        uniform mat4 uMVMatrix;
        uniform mat4 uPMatrix;

        // custom variables
        varying vec2 vTextureCoord;

        void main() {
            gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
            vTextureCoord = aTextureCoord;
        }
    `;

  const ripplesFs = `
        #ifdef GL_FRAGMENT_PRECISION_HIGH
        precision highp float;
        #else
        precision mediump float;
        #endif

        uniform vec2 uResolution;
        uniform vec2 uMousePosition;
        uniform vec2 uVelocity;
        uniform int uTime;
        uniform sampler2D uRipples;

        uniform float uViscosity;
        uniform float uSpeed;
        uniform float uSize;
        uniform float uPixelRatio;
        uniform float uDissipation;

        varying vec2 vTextureCoord;


        void main() {
            // uniformize size for different screens
            float size = uSize;
            vec2 refScreen = vec2(1600.0, 900.0);
            float resoLength = length(uResolution / uPixelRatio);

            float screenRatio = length(refScreen) / resoLength;
            // flatten result for wider screens
            screenRatio = pow(screenRatio, min(1.0, screenRatio));
            size *= screenRatio;

            float velocity = clamp(length(uVelocity), 0.1, 1.5);
            vec3 speed = vec3(vec2(uSpeed) / (uResolution.xy * screenRatio), 0.0);

            vec2 mouse = (uMousePosition + 1.0) * 0.5;

            vec4 color = texture2D(uRipples, vTextureCoord);

            float shade = smoothstep(0.02 * size * velocity, 0.0, length(mouse - vTextureCoord));

            vec4 texelColor = color;

            float d = shade * uViscosity;

            float top = texture2D(uRipples, vTextureCoord - speed.zy, 1.0).x;
            float right = texture2D(uRipples, vTextureCoord - speed.xz, 1.0).x;
            float bottom = texture2D(uRipples, vTextureCoord + speed.xz, 1.0).x;
            float left = texture2D(uRipples, vTextureCoord + speed.zy, 1.0).x;

            d += -(texelColor.y - 0.5) * 2.0 + (top + right + bottom + left - 2.0);
            d *= uDissipation;

            // skip first frames
            d *= float(uTime > 5);

            d = d * 0.5 + 0.5;

            color = vec4(d, texelColor.x, 0.0, 1.0);

            gl_FragColor = color;
        }
    `;

  const renderFs = `
        // Fragment shader code for render pass
    `;

  window.addEventListener("load", () => {
    // create curtains instance
    const curtains = new Curtains({
      container: "canvas",
      pixelRatio: Math.min(1.5, window.devicePixelRatio),
    });

    // on success
    curtains.onSuccess(() => {
      // track the mouse position
      const mouse = {
        last: new Vec2(),
        current: new Vec2(),
        velocity: new Vec2(),
        updateVelocity: false,
        lastTime: null,
      };

      // used for resolution uniform
      const curtainsBBox = curtains.getBoundingRect();

      // our ripples ping pong fbo
      const ripples = new PingPongPlane(
        curtains,
        document.getElementById("canvas"),
        {
          vertexShader: ripplesVs,
          fragmentShader: ripplesFs,
          autoloadSources: false,
          watchScroll: false,
          sampler: "uRipples",
          texturesOptions: {
            floatingPoint: "half-float",
          },
          uniforms: {
            mousePosition: {
              name: "uMousePosition",
              type: "2f",
              value: mouse.current,
            },
            // our velocity
            velocity: {
              name: "uVelocity",
              type: "2f",
              value: mouse.velocity,
            },
            // window aspect ratio to draw a circle
            resolution: {
              name: "uResolution",
              type: "2f",
              value: new Vec2(curtainsBBox.width, curtainsBBox.height),
            },
            pixelRatio: {
              name: "uPixelRatio",
              type: "1f",
              value: curtains.pixelRatio,
            },
            time: {
              name: "uTime",
              type: "1i",
              value: -1,
            },

            viscosity: {
              name: "uViscosity",
              type: "1f",
              value: 10.75,
            },
            speed: {
              name: "uSpeed",
              type: "1f",
              value: 6.75,
            },
            size: {
              name: "uSize",
              type: "1f",
              value: 2,
            },
            dissipation: {
              name: "uDissipation",
              type: "1f",
              value: 0.9875,
            },
          },
        }
      );

      ripples
        .onRender(() => {
          mouse.velocity.set(
            curtains.lerp(mouse.velocity.x, 0, 0.05),
            curtains.lerp(mouse.velocity.y, 0, 0.1)
          );

          ripples.uniforms.velocity.value = mouse.velocity.clone();

          ripples.uniforms.time.value++;
        })
        .onAfterResize(() => {
          // update our window aspect ratio uniform
          const boundingRect = ripples.getBoundingRect();
          ripples.uniforms.resolution.value.set(
            boundingRect.width,
            boundingRect.height
          );
        });

      // handle mouse move
      const onMouseMove = (e) => {
        if (ripples) {
          const mousePos = {
            x: e.targetTouches ? e.targetTouches[0].clientX : e.clientX,
            y: e.targetTouches ? e.targetTouches[0].clientY : e.clientY,
          };

          mouse.last.copy(mouse.current);

          mouse.updateVelocity = true;

          if (!mouse.lastTime) {
            mouse.lastTime = (performance || Date).now();
          }

          if (
            mouse.last.x === 0 &&
            mouse.current.x === 0 &&
            mouse.current.y === 0
          ) {
            mouse.updateVelocity = false;
          }

          mouse.current.set(mousePos.x, mousePos.y);

          const webglCoords = ripples.mouseToPlaneCoords(mouse.current);
          ripples.uniforms.mousePosition.value = webglCoords;

          // divided by a frame duration (roughly)
          if (mouse.updateVelocity) {
            const time = (performance || Date).now();
            const delta = Math.max(14, time - mouse.lastTime);
            mouse.lastTime = time;

            mouse.velocity.set(
              (mouse.current.x - mouse.last.x) / delta,
              (mouse.current.y - mouse.last.y) / delta
            );
          }
        }
      };

      // handle mouse move
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("touchmove", onMouseMove);

      // render pass (display the effect)
      const renderPassUniforms = {
        resolution: {
          name: "uResolution",
          type: "2f",
          value: new Vec2(curtainsBBox.width, curtainsBBox.height),
        },
        hue: {
          name: "uHue",
          type: "1f",
          value: 4.28,
        },
        saturation: {
          name: "uSaturation",
          type: "1f",
          value: 1.5,
        },
        bgColor: {
          name: "uBgColor",
          type: "3f",
          value: [255, 255, 255],
        },
      };

      const params = {
        fragmentShader: renderFs,
        depth: false,
        uniforms: renderPassUniforms,
      };

      // post pro
      const renderPass = new ShaderPass(curtains, params);

      renderPass.onAfterResize(() => {
        // update our window aspect ratio uniform
        const boundingRect = renderPass.getBoundingRect();
        renderPass.uniforms.resolution.value.set(
          boundingRect.width,
          boundingRect.height
        );
      });

      // add our ripple texture to the render pass
      renderPass.createTexture({
        sampler: "uRipplesTexture",
        fromTexture: ripples.getTexture(),
      });
    });
  });
}
export default ripple;
