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
function h(m, e) {
  return n(), o("svg", l, e[0] || (e[0] = [
    t("path", { d: "M16 19a3 3 0 1 0 6 0 3 3 0 1 0-6 0m1 2 4-4m-2-5h2l-9-9-9 9h2v7a2 2 0 0 0 2 2h5.5" }, null, -1),
    t("path", { d: "M9 21v-6a2 2 0 0 1 2-2h2c.58 0 1.103.247 1.468.642" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", h]]);
export {
  d as I
};