import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
const l = {}, i = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" },
  viewBox: "0 0 24 24"
};
function m(s, e) {
  return n(), o("svg", i, e[0] || (e[0] = [
    t("path", { d: "m3 17 8 5 7-4v-8l-4-2.5L18 5l4 2.5v4L11 18l-4-2.5V8L3 5.5zm8 1v4m-4-6.5 7-4m0-4v4m0 0 4 2.5" }, null, -1),
    t("path", { d: "M11 13V5.5L7 3 3 5.5M7 8l4-2.5m7 4.5 4-2.5" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ r(l, [["render", m]]);
export {
  h as I
};
