import { openBlock as t, createElementBlock as o, createElementVNode as r } from "vue";
import { _ as n } from "../filled/AccessibleFilled.js";
const i = {}, m = {
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
function s(v, e) {
  return t(), o("svg", m, e[0] || (e[0] = [
    r("path", { d: "M10 8v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zM7.5 4.21v.01M4.21 7.5v.01M3 12v.01m1.21 4.49v.01m3.29 3.28v.01M12 21v.01m4.5-1.22v.01m3.29-3.3v.01M21 12v.01M19.79 7.5v.01m-3.29-3.3v.01M12 3v.01" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ n(i, [["render", s]]);
export {
  h as C
};
