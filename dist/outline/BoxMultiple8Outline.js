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
function a(h, e) {
  return n(), o("svg", i, e[0] || (e[0] = [
    t("path", { d: "M7 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z" }, null, -1),
    t("path", { d: "M12 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0" }, null, -1),
    t("path", { d: "M12 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0" }, null, -1),
    t("path", { d: "M17 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2" }, null, -1)
  ]));
}
const m = /* @__PURE__ */ r(l, [["render", a]]);
export {
  m as B
};
