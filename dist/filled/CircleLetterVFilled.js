import { openBlock as t, createElementBlock as r, createElementVNode as o } from "vue";
import { _ as l } from "./AccessibleFilled.js";
const n = {}, i = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function m(c, e) {
  return t(), r("svg", i, e[0] || (e[0] = [
    o("path", { d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m2.243 5.03a1 1 0 0 0-1.213.727L12 11.875l-1.03-4.118a1 1 0 1 0-1.94.486l2 8c.252 1.01 1.688 1.01 1.94 0l2-8a1 1 0 0 0-.727-1.213" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ l(n, [["render", m]]);
export {
  d as C
};