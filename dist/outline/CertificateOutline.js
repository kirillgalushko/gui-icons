import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
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
function h(s, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M12 15a3 3 0 1 0 6 0 3 3 0 1 0-6 0" }, null, -1),
    e("path", { d: "M13 17.5V22l2-1.5 2 1.5v-4.5" }, null, -1),
    e("path", { d: "M10 19H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-1 1.73M6 9h12M6 12h3m-3 3h2" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(i, [["render", h]]);
export {
  a as C
};
