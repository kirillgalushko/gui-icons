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
function s(m, e) {
  return o(), n("svg", l, e[0] || (e[0] = [
    t("path", { d: "m10 15 5.586-5.585A2 2 0 1 1 19 8a2 2 0 1 1-1.413 3.414L14 15" }, null, -1),
    t("path", { d: "M12 13 8.414 9.415A2 2 0 1 0 5 8a2 2 0 1 0 1.413 3.414L10 15m-7 5h18c-.175-1.671-.046-3.345-2-5H5q-2 1.5-2 5" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as D
};
