import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
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
    t("path", { d: "m16 12.5-5-3 5-3 5 3V15l-5 3z" }, null, -1),
    t("path", { d: "M11 9.5V15l5 3m0-5.455 5-3.03M7 9H2m5 3H4m3 3H6" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ r(i, [["render", m]]);
export {
  h as I
};
