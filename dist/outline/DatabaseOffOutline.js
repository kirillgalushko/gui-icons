import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
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
function s(c, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M12.983 8.978C16.938 8.796 20 7.532 20 6c0-1.657-3.582-3-8-3-1.661 0-3.204.19-4.483.515M4.734 4.743C4.263 5.125 4 5.551 4 6c0 1.22 1.944 2.271 4.734 2.74" }, null, -1),
    e("path", { d: "M4 6v6c0 1.657 3.582 3 8 3 .986 0 1.93-.067 2.802-.19m3.187-.82C19.24 13.46 20 12.762 20 12V6" }, null, -1),
    e("path", { d: "M4 12v6c0 1.657 3.582 3 8 3 3.217 0 5.991-.712 7.261-1.74M20 16v-4M3 3l18 18" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ r(i, [["render", s]]);
export {
  d as D
};
