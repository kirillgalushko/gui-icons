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
function l(h, e) {
  return n(), o("svg", s, e[0] || (e[0] = [
    t("path", { d: "M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0" }, null, -1),
    t("path", { d: "M12.758 21.337a2 2 0 0 1-2.171-.437l-4.244-4.243a8 8 0 1 1 12.585-1.652M16 19h6" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", l]]);
export {
  d as I
};
