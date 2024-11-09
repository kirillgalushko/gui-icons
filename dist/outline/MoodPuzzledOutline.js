import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
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
function s(m, e) {
  return o(), n("svg", l, e[0] || (e[0] = [
    t("path", { d: "M14.986 3.51A9 9 0 1 0 16.5 19.794c2.489-1.437 4.181-3.978 4.5-6.794m-11-3h.01M14 8h.01" }, null, -1),
    t("path", { d: "M12 15q1.5-2 3-2m5-4v.01M20 6a2.003 2.003 0 0 0 .914-3.782 1.98 1.98 0 0 0-2.414.483" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", s]]);
export {
  c as M
};
