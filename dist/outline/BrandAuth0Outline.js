import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const l = {}, i = {
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
function s(h, e) {
  return n(), o("svg", i, e[0] || (e[0] = [
    t("path", { d: "M12 14.5 6.5 18l2-6L4 8h6l2-5 2 5h6l-4.5 4 2 6z" }, null, -1),
    t("path", { d: "M20.507 8.872 18.497 3H5.503L3.494 8.872c-1.242 3.593-.135 7.094 3.249 9.407L12 22l5.257-3.721c3.385-2.313 4.49-5.814 3.25-9.407" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(l, [["render", s]]);
export {
  d as B
};
