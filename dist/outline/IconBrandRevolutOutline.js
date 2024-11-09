import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function h(s, e) {
  return n(), o("svg", l, e[0] || (e[0] = [
    t("path", { d: "M5 10h3v10H5z" }, null, -1),
    t("path", { d: "M14.5 4H5v3h9.4a1.5 1.5 0 0 1 0 3H11v4l4 6h4l-5-7h.5a4.5 4.5 0 1 0 0-9" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", h]]);
export {
  d as I
};
