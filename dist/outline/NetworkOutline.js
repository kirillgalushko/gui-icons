import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const i = {}, m = {
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
function s(h, e) {
  return o(), n("svg", m, e[0] || (e[0] = [
    t("path", { d: "M6 9a6 6 0 1 0 12 0A6 6 0 0 0 6 9" }, null, -1),
    t("path", { d: "M12 3q2 .5 2 6c0 5.5-.667 5.667-2 6m0-12q-2 .5-2 6c0 5.5.667 5.667 2 6M6 9h12M3 20h7m4 0h7m-11 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-5v3" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as N
};
