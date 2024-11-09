import { openBlock as t, createElementBlock as o, createElementVNode as n } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
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
function l(m, e) {
  return t(), o("svg", s, e[0] || (e[0] = [
    n("path", { d: "M12 4v3M8 4v6m8-6v6m-4 8.5L9 20l.5-3.5-2-2 3-.5 1.5-3 1.5 3 3 .5-2 2L15 20z" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ r(i, [["render", l]]);
export {
  h as M
};
