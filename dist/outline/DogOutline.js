import { openBlock as o, createElementBlock as n, createElementVNode as t } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const i = {}, m = {
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
function l(s, e) {
  return o(), n("svg", m, e[0] || (e[0] = [
    t("path", { d: "M11 5h2m6 7q-1 8-5 8h-4q-4 0-5-8" }, null, -1),
    t("path", { d: "M11 16q0 1 1 1c1 0 1-.333 1-1zm1 2v2m-2-9v.01m4-.01v.01M5 4l6 .97-6.238 6.688a1.02 1.02 0 0 1-1.41.111.95.95 0 0 1-.327-.954zm14 0-6 .97 6.238 6.688c.358.408.989.458 1.41.111a.95.95 0 0 0 .327-.954z" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", l]]);
export {
  d as D
};
