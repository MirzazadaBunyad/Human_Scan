function loadSplineScene(fileName, canvasId) {
  import("https://esm.sh/@splinetool/runtime")
    .then(({ Application }) => {
      const canvas = document.getElementById(canvasId);
      const app = new Application(canvas);
      app.load(`https://prod.spline.design/${fileName}/scene.splinecode`);
    })
    .catch((error) => {
      console.error("Error loading Spline app:", error);
    });
}

const fileName = "0eI7JO23zWEe8FiA";
const canvasId = "canvas";

loadSplineScene(fileName, canvasId);