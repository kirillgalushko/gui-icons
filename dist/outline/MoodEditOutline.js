import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
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
function h(l, e) {
  return o(), n("svg", s, e[0] || (e[0] = [
    t("path", { d: "M20.955 11.104a9 9 0 1 0-9.895 9.847M9 10h.01M15 10h.01" }, null, -1),
    t("path", { d: "M9.5 15c.658.672 1.56 1 2.5 1q.189 0 .376-.018m6.044-.372a2.1 2.1 0 0 1 2.97 2.97L18 22h-3v-3z" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", h]]);
export {
  c as M
};
