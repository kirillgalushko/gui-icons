import { openBlock as o, createElementBlock as r, createElementVNode as t } from "vue";
import { _ as n } from "../filled/AccessibleFilled.js";
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
function m(s, e) {
  return o(), r("svg", l, e[0] || (e[0] = [
    t("path", { d: "M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18" }, null, -1),
    t("path", { d: "m8 16 1-1 1.5 1 1.5-1 1.5 1 1.5-1 1 1m-7.5-4.5L10 10 8.5 8.5m7 3L14 10l1.5-1.5" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ n(i, [["render", m]]);
export {
  c as M
};
