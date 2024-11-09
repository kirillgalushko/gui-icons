import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as i } from "../filled/IconAccessibleFilled.js";
const r = {}, s = {
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
function l(h, e) {
  return n(), o("svg", s, e[0] || (e[0] = [
    t("path", { d: "M3 10a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }, null, -1),
    t("path", { d: "M7 16v-3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3" }, null, -1)
  ]));
}
const m = /* @__PURE__ */ i(r, [["render", l]]);
export {
  m as I
};
