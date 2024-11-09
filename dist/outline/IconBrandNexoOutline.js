import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
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
function s(m, e) {
  return n(), o("svg", i, e[0] || (e[0] = [
    t("path", { d: "m17 3 5 3v12l-5 3-10-6V9l10 6V9l-5-3z" }, null, -1),
    t("path", { d: "M12 6 7 3 2 6v12l5 3 4.7-3.13" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ r(l, [["render", s]]);
export {
  h as I
};
