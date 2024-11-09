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
function m(s, e) {
  return n(), o("svg", l, e[0] || (e[0] = [
    t("path", { d: "M4 5h1m4 0h2M9 3v2m-.508 3.517C7.678 11.172 5.972 13 4 13" }, null, -1),
    t("path", { d: "M5 9c0 2.144 2.952 3.908 6.7 4m.3 7 2.463-5.541m1.228-2.764L16 11l.8 1.8M18 18h-5.1M3 3l18 18" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", m]]);
export {
  d as I
};
