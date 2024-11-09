import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
const l = {}, i = {
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
function s(h, t) {
  return n(), o("svg", i, t[0] || (t[0] = [
    e("path", { d: "M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9" }, null, -1),
    e("path", { d: "m5 7 4.5 11 1.5-5h2l1.5 5L19 7" }, null, -1),
    e("path", { d: "m9 4 2 6h2l2-6" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(l, [["render", s]]);
export {
  c as I
};
