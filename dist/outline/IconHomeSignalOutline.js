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
function m(h, e) {
  return o(), n("svg", l, e[0] || (e[0] = [
    t("path", { d: "M15 22v-2m3 2v-4m3 4v-6m-2-3.506V12h2l-9-9-9 9h2v7a2 2 0 0 0 2 2h4" }, null, -1),
    t("path", { d: "M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v.5" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", m]]);
export {
  d as I
};
