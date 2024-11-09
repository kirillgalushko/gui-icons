import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
const i = {}, h = {
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
function m(s, e) {
  return o(), n("svg", h, e[0] || (e[0] = [
    t("path", { d: "M9 21v-6a2 2 0 0 1 2-2h2c.645 0 1.218.305 1.584.78" }, null, -1),
    t("path", { d: "m20 11-8-8-9 9h2v7a2 2 0 0 0 2 2h4m7.42-5.39a2.1 2.1 0 0 1 2.97 2.97L18 22h-3v-3z" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", m]]);
export {
  d as I
};
