import { openBlock as o, createElementBlock as n, createElementVNode as e } from "vue";
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
function l(s, t) {
  return o(), n("svg", h, t[0] || (t[0] = [
    e("path", { d: "M19 13v-1h2l-9-9-9 9h2v7a2 2 0 0 0 2 2h2.5" }, null, -1),
    e("path", { d: "M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-2 7 3-3 2 2 4-4" }, null, -1),
    e("path", { d: "M19 17h3v3" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", l]]);
export {
  d as I
};
