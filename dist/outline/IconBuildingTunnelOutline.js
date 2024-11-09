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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" },
  viewBox: "0 0 24 24"
};
function m(h, e) {
  return n(), o("svg", l, e[0] || (e[0] = [
    t("path", { d: "M5 21h14a2 2 0 0 0 2-2v-7a9 9 0 0 0-18 0v7a2 2 0 0 0 2 2" }, null, -1),
    t("path", { d: "M8 21v-9a4 4 0 1 1 8 0v9M3 17h4m10 0h4m0-5h-4M7 12H3m9-9v5M6 6l3 3m6 0 3-3z" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", m]]);
export {
  d as I
};
