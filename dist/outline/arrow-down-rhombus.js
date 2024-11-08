import { openBlock as o, createElementBlock as n, createElementVNode as e } from "vue";
const l = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function r(i, t) {
  return o(), n("svg", l, t[0] || (t[0] = [
    e("path", { d: "M12 8v13" }, null, -1),
    e("path", { d: "M15 18l-3 3l-3 -3" }, null, -1),
    e("path", { d: "M14.5 5.5l-2.5 -2.5l-2.5 2.5l2.5 2.5z" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
