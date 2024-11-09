import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as m } from "../filled/AccessibleFilled.js";
const r = {}, h = {
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
function i(l, e) {
  return n(), o("svg", h, e[0] || (e[0] = [
    t("path", { d: "M9 5h9a1 1 0 0 1 1 1v9m-.292 3.706A1 1 0 0 1 18 19H6a1 1 0 0 1-1-1V6c0-.272.108-.518.284-.698" }, null, -1),
    t("path", { d: "M13 9h2v2m0 4H9V9m-6 1h2m-2 4h2m5-11v2m4-2v2m7 5h-2m2 4h-2m-5 7v-2m-4 2v-2M3 3l18 18" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ m(r, [["render", i]]);
export {
  d as C
};
