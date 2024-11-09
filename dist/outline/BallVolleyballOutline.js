import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
import { _ as l } from "../filled/AccessibleFilled.js";
const r = {}, i = {
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
  return n(), o("svg", i, t[0] || (t[0] = [
    e("path", { d: "M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" }, null, -1),
    e("path", { d: "M12 12a8 8 0 0 0 8 4M7.5 13.5A12 12 0 0 0 16 20" }, null, -1),
    e("path", { d: "M12 12a8 8 0 0 0-7.464 4.928m8.415-9.575a12 12 0 0 0-9.88 4.111" }, null, -1),
    e("path", { d: "M12 12a8 8 0 0 0-.536-8.928m4.085 12.075a12 12 0 0 0 1.38-10.611" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ l(r, [["render", a]]);
export {
  d as B
};
