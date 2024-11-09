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
function m(s, e) {
  return n(), o("svg", i, e[0] || (e[0] = [
    t("path", { d: "m14 6 7 7-2 2m-9-5-4.172 4.172a2.828 2.828 0 1 0 4 4L14 14" }, null, -1),
    t("path", { d: "m16 12 4.414-4.414a2 2 0 0 0 0-2.829l-1.171-1.171a2 2 0 0 0-2.829 0L12 8M4 20l1.768-1.768M3 3l18 18" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(l, [["render", m]]);
export {
  d as B
};
