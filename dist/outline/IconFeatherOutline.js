import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as r } from "../filled/IconAccessibleFilled.js";
const m = {}, i = {
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
  return n(), o("svg", i, e[0] || (e[0] = [
    t("path", { d: "m4 20 10-10m0-5v5h5m-9-1v5h5m-9-1v5h5m-5-5 4-4 4-4" }, null, -1),
    t("path", { d: "M19 10c.638-.636 1-1.515 1-2.486A3.515 3.515 0 0 0 16.483 4c-.97 0-1.847.367-2.483 1m-3 13 4-4 4-4" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(m, [["render", h]]);
export {
  d as I
};
