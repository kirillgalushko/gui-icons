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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" },
  viewBox: "0 0 24 24"
};
function l(h, e) {
  return o(), n("svg", s, e[0] || (e[0] = [
    t("path", { d: "M10 3v16a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-7H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" }, null, -1),
    t("path", { d: "m16 4 1.465 1.638a2 2 0 1 1-3.015.099z" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(i, [["render", l]]);
export {
  a as I
};
