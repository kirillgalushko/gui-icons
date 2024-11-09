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
function s(h, e) {
  return n(), o("svg", l, e[0] || (e[0] = [
    t("path", { d: "M3 15a4 4 0 1 0 8 0 4 4 0 1 0-8 0m4 0v.01M17 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-6.5 0H17" }, null, -1),
    t("path", { d: "M20 15.2V11a1 1 0 0 0-1-1h-6l-2-5H5v6.5" }, null, -1),
    t("path", { d: "M18 5h-1a1 1 0 0 0-1 1v4" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", s]]);
export {
  c as T
};
