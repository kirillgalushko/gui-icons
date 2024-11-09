import { openBlock as n, createElementBlock as o, createElementVNode as t } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const i = {}, s = {
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
function l(h, e) {
  return n(), o("svg", s, e[0] || (e[0] = [
    t("path", { d: "M8.59 4.581C8.952 4.222 9.45 4 10 4h8a2 2 0 0 1 2 2v8c0 .556-.227 1.06-.594 1.422M16 16h-6a2 2 0 0 1-2-2V8" }, null, -1),
    t("path", { d: "M16 16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2M3 3l18 18" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", l]]);
export {
  c as L
};
