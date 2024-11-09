import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as l } from "../filled/AccessibleFilled.js";
const r = {}, i = {
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
    t("path", { d: "M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z" }, null, -1),
    t("path", { d: "M15.5 9.422c.312.18.503.515.5.876v3.277c0 .364-.197.7-.515.877l-3 1.922a1 1 0 0 1-.97 0l-3-1.922A1 1 0 0 1 8 13.576v-3.278c0-.364.197-.7.514-.877l3-1.79c.311-.174.69-.174 1 0l3 1.79H15.5z" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ l(r, [["render", s]]);
export {
  d as A
};
