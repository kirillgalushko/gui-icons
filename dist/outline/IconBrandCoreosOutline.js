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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function s(c, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" }, null, -1),
    e("path", { d: "M12 3c-3.263 3.212-3 7.654-3 12 4.59.244 8.814-.282 12-3" }, null, -1),
    e("path", { d: "M9.5 9a4.494 4.494 0 0 1 5.5 5.5" }, null, -1)
  ]));
}
const m = /* @__PURE__ */ r(i, [["render", s]]);
export {
  m as I
};
