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
function s(m, e) {
  return o(), n("svg", l, e[0] || (e[0] = [
    t("path", { d: "M15 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0M7 19l4-2.5-.5-1.5m5.5 6-1-6-4.5-3L14 6" }, null, -1),
    t("path", { d: "m7 9 1.5-3H14l2 4 3 1M3 17q.598 1.732 1.5 1.951c6 1.464 10.772 2.262 13.5 2.927q2 .488 3-.976" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ r(i, [["render", s]]);
export {
  h as I
};
