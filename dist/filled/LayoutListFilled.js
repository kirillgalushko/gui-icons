import { openBlock as e, createElementBlock as o, createElementVNode as r } from "vue";
import { _ as n } from "./AccessibleFilled.js";
const i = {}, m = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function a(s, t) {
  return e(), o("svg", m, t[0] || (t[0] = [
    r("path", { d: "M18 3a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm0 10a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3z" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ n(i, [["render", a]]);
export {
  h as L
};
