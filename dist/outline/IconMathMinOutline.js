import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
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
function l(m, e) {
  return n(), o("svg", s, e[0] || (e[0] = [
    t("path", { d: "M15 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0" }, null, -1),
    t("path", { d: "M3 13s1-9 4-9c2.48 0 5.643 9.565 8.36 12.883m3.388.155Q19.801 15.718 21 9" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", l]]);
export {
  d as I
};
