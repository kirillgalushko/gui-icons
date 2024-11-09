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
    t("path", { d: "M12.5 21H7a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h10a2 2 0 0 1 1.749 1.028" }, null, -1),
    t("path", { d: "M11 16a1 1 0 1 0 2 0 1 1 0 0 0-2 0m-3-5V7a4 4 0 1 1 8 0v4m0 8a3 3 0 1 0 6 0 3 3 0 1 0-6 0m1 2 4-4" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ r(i, [["render", m]]);
export {
  h as L
};
