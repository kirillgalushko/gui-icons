import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
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
function m(s, e) {
  return t(), n("svg", l, e[0] || (e[0] = [
    o("path", { d: "M12 12V3l4.912 1.914a1.7 1.7 0 0 1 .428 2.925zm0 0h9l-1.914 4.912a1.7 1.7 0 0 1-2.925.428zm0 0H3l1.914-4.912a1.7 1.7 0 0 1 2.925-.428zm0 0v9l-4.912-1.914a1.7 1.7 0 0 1-.428-2.925z" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", m]]);
export {
  c as C
};
