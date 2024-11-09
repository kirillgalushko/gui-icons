import { openBlock as o, createElementBlock as r, createElementVNode as t } from "vue";
import { _ as n } from "../filled/AccessibleFilled.js";
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
function m(s, e) {
  return o(), r("svg", i, e[0] || (e[0] = [
    t("path", { d: "M4.706 4.73a1 1 0 0 0-.458 1.14L6 12l-1.752 6.13a1 1 0 0 0 .592 1.205l6.282 2.503a2.46 2.46 0 0 0 1.756 0l6.282-2.503q.06-.024.116-.055m-.474-4.474L18 12l1.752-6.13a1 1 0 0 0-.592-1.205l-6.282-2.503a2.46 2.46 0 0 0-1.756 0L7.578 3.574" }, null, -1),
    t("path", { d: "M4.5 5.5q.991.32 1.5.5m6 2c.29-.003.603-.06.878-.17L19.5 5.5M6 12l5.21 1.862a2.34 2.34 0 0 0 1.58 0l.742-.265m2.956-1.057q.468-.166 1.512-.54m-6 10V12M3 3l18 18" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ n(l, [["render", m]]);
export {
  c as I
};
