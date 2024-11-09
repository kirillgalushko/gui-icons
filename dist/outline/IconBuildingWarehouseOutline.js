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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" },
  viewBox: "0 0 24 24"
};
function h(s, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M3 21V8l9-4 9 4v13" }, null, -1),
    e("path", { d: "M13 13h4v8H7v-6h6" }, null, -1),
    e("path", { d: "M13 21v-9a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", h]]);
export {
  c as I
};
