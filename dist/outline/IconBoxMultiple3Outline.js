import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
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
function a(s, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M7 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z" }, null, -1),
    e("path", { d: "M17 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2m7 3a2 2 0 1 0-2-2" }, null, -1),
    e("path", { d: "M12 12a2 2 0 1 0 2-2" }, null, -1)
  ]));
}
const c = /* @__PURE__ */ r(i, [["render", a]]);
export {
  c as I
};
