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
function l(c, e) {
  return n(), o("svg", s, e[0] || (e[0] = [
    t("path", { d: "M19 14.083c0 4.154-2.966 6.74-7 6.917-4.2 0-7-2.763-7-6.917C5 8.545 8.5 2.993 12 3s7 5.545 7 11.083" }, null, -1),
    t("path", { d: "m12 3-1.5 5 3.5 2.5-2 3.5" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ r(i, [["render", l]]);
export {
  h as I
};
