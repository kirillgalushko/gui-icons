import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
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
function l(s, e) {
  return n(), o("svg", m, e[0] || (e[0] = [
    t("path", { d: "m11 21-1-4-2-3V8" }, null, -1),
    t("path", { d: "m5 14-1-3 4-3 3 2 3 .5M7 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 13-2 4m11 0v-8.5a1.5 1.5 0 0 1 3 0v.5" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ r(i, [["render", l]]);
export {
  h as I
};
