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
function m(h, e) {
  return n(), o("svg", l, e[0] || (e[0] = [
    t("path", { d: "M17 21v-6m2 0v-1.5m0 9V21m-2-3h3m-1 0h.5a1.5 1.5 0 0 1 0 3H16m3-3h.5a1.5 1.5 0 0 0 0-3H16" }, null, -1),
    t("path", { d: "M20.866 10.45a9 9 0 1 0-7.815 10.488" }, null, -1),
    t("path", { d: "M12 7v5l1.5 1.5" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", m]]);
export {
  d as C
};
