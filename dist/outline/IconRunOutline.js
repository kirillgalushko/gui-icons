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
function s(m, e) {
  return n(), o("svg", l, e[0] || (e[0] = [
    t("path", { d: "M12 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0M4 17l5 1 .75-1.5M15 21v-4l-4-3 1-6" }, null, -1),
    t("path", { d: "M7 12V9l5-1 3 3 3 1" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as I
};
