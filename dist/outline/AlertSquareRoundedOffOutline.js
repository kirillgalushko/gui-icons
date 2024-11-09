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
    n("path", { d: "M19.201 19.199C17.851 20.549 15.601 21 12 21c-7.2 0-9-1.8-9-9 0-3.598.45-5.847 1.797-7.197m2.626-1.376C8.627 3.12 10.132 3 12 3c7.2 0 9 1.8 9 9 0 1.865-.12 3.367-.425 4.57M12 7v1m0 8h.01M3 3l18 18" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ r(i, [["render", l]]);
export {
  h as A
};
