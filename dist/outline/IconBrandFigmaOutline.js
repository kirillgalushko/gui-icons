import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
const i = {}, l = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function a(s, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M12 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0" }, null, -1),
    e("path", { d: "M6 6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3" }, null, -1),
    e("path", { d: "M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3V3" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", a]]);
export {
  d as I
};
