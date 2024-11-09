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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function a(h, e) {
  return n(), o("svg", s, e[0] || (e[0] = [
    t("path", { d: "m3 21 1.65-3.8a9 9 0 1 1 3.4 2.9z" }, null, -1),
    t("path", { d: "M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", a]]);
export {
  c as I
};
