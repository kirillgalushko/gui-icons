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
function s(m, e) {
  return n(), o("svg", i, e[0] || (e[0] = [
    t("path", { d: "M20 7.5v9l-4 2.25L12 21l-4-2.25-4-2.25v-9l4-2.25L12 3l4 2.25zM12 12l4-2.25 4-2.25M12 12v9m0-9L8 9.75 4 7.5" }, null, -1),
    t("path", { d: "m20 12-4 2v4.75M4 12l4 2v4.75m0-13.5 4 2.25 4-2.25" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(l, [["render", s]]);
export {
  c as B
};
