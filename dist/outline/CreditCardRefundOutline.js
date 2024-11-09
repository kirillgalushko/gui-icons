import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const i = {}, h = {
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
function s(m, e) {
  return t(), n("svg", h, e[0] || (e[0] = [
    o("path", { d: "M12 19H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v4.5M3 10h18M7 15h.01M11 15h2m3 4h6m-3-3-3 3 3 3" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", s]]);
export {
  c as C
};
