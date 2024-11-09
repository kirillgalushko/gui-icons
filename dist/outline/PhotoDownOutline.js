import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
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
function h(m, e) {
  return o(), n("svg", l, e[0] || (e[0] = [
    t("path", { d: "M15 8h.01M12.5 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6.5" }, null, -1),
    t("path", { d: "m3 16 5-5c.928-.893 2.072-.893 3 0l4 4" }, null, -1),
    t("path", { d: "m14 14 1-1c.653-.629 1.413-.815 2.13-.559M19 16v6m3-3-3 3-3-3" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", h]]);
export {
  d as P
};
