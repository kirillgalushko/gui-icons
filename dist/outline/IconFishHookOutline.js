import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
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
function l(m, e) {
  return o(), n("svg", s, e[0] || (e[0] = [
    t("path", { d: "M16 9v6a5 5 0 0 1-10 0v-4l3 3" }, null, -1),
    t("path", { d: "M14 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2-2V3" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", l]]);
export {
  d as I
};
