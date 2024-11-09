import { openBlock as t, createElementBlock as o, createElementVNode as n } from "vue";
import { _ as r } from "../filled/AccessibleFilled.js";
const i = {}, v = {
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
  return t(), o("svg", v, e[0] || (e[0] = [
    n("path", { d: "M8 8h8v8H8zM4 4v.01M8 4v.01M12 4v.01M16 4v.01M20 4v.01M4 20v.01M8 20v.01m4-.01v.01m4-.01v.01m4-.01v.01M20 16v.01M20 12v.01M20 8v.01M4 16v.01M4 12v.01M4 8v.01" }, null, -1)
  ]));
}
const h = /* @__PURE__ */ r(i, [["render", m]]);
export {
  h as B
};
