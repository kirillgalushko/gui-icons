import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const l = {}, i = {
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
  return n(), o("svg", i, e[0] || (e[0] = [
    t("path", { d: "m7 16.5-5-3 5-3 5 3V19l-5 3z" }, null, -1),
    t("path", { d: "M2 13.5V19l5 3m0-5.455 5-3.03m5 2.985-5-3 5-3 5 3V19l-5 3zM12 19l5 3m0-5.5 5-3m-10 0V8L7 5l5-3 5 3v5.5M7 5.03v5.455M12 8l5-3" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(l, [["render", m]]);
export {
  d as P
};
