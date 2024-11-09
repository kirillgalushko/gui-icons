import { openBlock as t, createElementBlock as o, createElementVNode as r } from "vue";
import { _ as n } from "../filled/AccessibleFilled.js";
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
function v(s, e) {
  return t(), o("svg", m, e[0] || (e[0] = [
    r("path", { d: "M20 4v16M4 4v.01M8 4v.01M12 4v.01M16 4v.01M4 8v.01M12 8v.01M4 12v.01M8 12v.01m4-.01v.01m4-.01v.01M4 16v.01m8-.01v.01M4 20v.01M8 20v.01m4-.01v.01m4-.01v.01" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ n(i, [["render", v]]);
export {
  c as B
};
