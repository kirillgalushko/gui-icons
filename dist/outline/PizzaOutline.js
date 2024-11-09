import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const i = {}, l = {
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
function s(m, e) {
  return n(), o("svg", l, e[0] || (e[0] = [
    t("path", { d: "M12 21.5c-3.04 0-5.952-.714-8.5-1.983L12 3l8.5 16.517A19.1 19.1 0 0 1 12 21.5" }, null, -1),
    t("path", { d: "M5.38 15.866a14.94 14.94 0 0 0 6.815 1.634 14.94 14.94 0 0 0 6.502-1.479M13 11.01V11m-2 3v-.01" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as P
};
