import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const i = {}, a = {
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
  return n(), o("svg", a, e[0] || (e[0] = [
    t("path", { d: "M12 20H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1a2 2 0 0 0 2-2 1 1 0 0 1 1-1h6a1 1 0 0 1 1 1 2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v3.5" }, null, -1),
    t("path", { d: "M14.984 13.307a3 3 0 1 0-2.32 2.62M16 19a3 3 0 1 0 6 0 3 3 0 1 0-6 0m1 2 4-4" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", l]]);
export {
  c as C
};
