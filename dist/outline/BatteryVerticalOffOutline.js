import { openBlock as t, createElementBlock as o, createElementVNode as r } from "vue";
import { _ as n } from "../filled/AccessibleFilled.js";
const i = {}, s = {
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
function m(h, e) {
  return t(), o("svg", s, e[0] || (e[0] = [
    r("path", { d: "m3 3 18 18m-4-8V7a2 2 0 0 0-2-2h-.5a.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5H9M7 7v11a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ n(i, [["render", m]]);
export {
  c as B
};
