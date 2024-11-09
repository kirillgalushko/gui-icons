import { openBlock as t, createElementBlock as o, createElementVNode as r } from "vue";
import { _ as n } from "../filled/AccessibleFilled.js";
const m = {}, i = {
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
function h(s, e) {
  return t(), o("svg", i, e[0] || (e[0] = [
    r("path", { d: "M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm8-2v16m-8-5h8m0-3h8m-4 0v8m0-4h4" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ n(m, [["render", h]]);
export {
  c as C
};
