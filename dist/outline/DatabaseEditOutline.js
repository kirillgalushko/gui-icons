import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
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
function l(c, e) {
  return n(), o("svg", s, e[0] || (e[0] = [
    t("path", { d: "M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3-3.582-3-8-3-8 1.343-8 3" }, null, -1),
    t("path", { d: "M4 6v6c0 1.657 3.582 3 8 3q.718 0 1.402-.046M20 12V6" }, null, -1),
    t("path", { d: "M4 12v6c0 1.526 3.04 2.786 6.972 2.975m7.448-5.365a2.1 2.1 0 0 1 2.97 2.97L18 22h-3v-3z" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", l]]);
export {
  d as D
};
