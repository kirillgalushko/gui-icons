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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" },
  viewBox: "0 0 24 24"
};
function h(l, e) {
  return n(), o("svg", s, e[0] || (e[0] = [
    t("path", { d: "M14 12H9M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5z" }, null, -1),
    t("path", { d: "M15 16h-5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h5" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", h]]);
export {
  c as I
};
