import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
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
function s(h, e) {
  return n(), o("svg", l, e[0] || (e[0] = [
    t("path", { d: "M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0" }, null, -1),
    t("path", { d: "M12.02 21.485a2 2 0 0 1-1.433-.585l-4.244-4.243a8 8 0 1 1 13.403-3.651M16 22l5-5m0 4.5V17h-4.5" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", s]]);
export {
  c as M
};
