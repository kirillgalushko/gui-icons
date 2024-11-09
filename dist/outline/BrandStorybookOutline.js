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
function s(c, e) {
  return o(), n("svg", l, e[0] || (e[0] = [
    t("path", { d: "m5 4 .5 16.5L19 21V3z" }, null, -1),
    t("path", { d: "M9 15c.6 1.5 1.639 2 3.283 2H12c1.8 0 3-.974 3-2.435 0-1.194-.831-1.799-2.147-2.333l-1.975-.802C9.728 10.963 9 10.008 9 8.963c0-.97.899-1.786 2.087-1.893l.613-.055c1.528-.138 3 .762 3.3 1.985m1-5.5v1" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ r(i, [["render", s]]);
export {
  h as B
};
