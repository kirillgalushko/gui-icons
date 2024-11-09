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
function h(s, e) {
  return n(), o("svg", l, e[0] || (e[0] = [
    t("path", { d: "M3 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0" }, null, -1),
    t("path", { d: "M7 5h9.5a3.5 3.5 0 0 1 0 7h-9a3.5 3.5 0 0 0 0 7H21" }, null, -1),
    t("path", { d: "m18 16 3 3-3 3" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", h]]);
export {
  c as S
};
