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
function m(s, e) {
  return n(), o("svg", l, e[0] || (e[0] = [
    t("path", { d: "m16 12 4 3-8 7-8-7 4-3" }, null, -1),
    t("path", { d: "M12 3 4 9l8 6 8-6zm0 12h8" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", m]]);
export {
  c as B
};
