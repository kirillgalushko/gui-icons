import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
const i = {}, l = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" },
  viewBox: "0 0 24 24"
};
function h(s, e) {
  return o(), n("svg", l, e[0] || (e[0] = [
    t("path", { d: "M6 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm5-1h2" }, null, -1),
    t("path", { d: "M12 9.5 11 12h2l-1 2.5" }, null, -1)
  ]));
}
const a = /* @__PURE__ */ r(i, [["render", h]]);
export {
  a as I
};
