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
function s(c, e) {
  return n(), o("svg", i, e[0] || (e[0] = [
    t("path", { d: "M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.799 5.744A4 4 0 0 1 10 16h4a4 4 0 0 1 3.798 2.741" }, null, -1),
    t("path", { d: "M19.875 6.27c.7.398 1.13 1.143 1.125 1.948v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(l, [["render", s]]);
export {
  a as U
};