import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
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
function r(h, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M9 21h6" }, null, -1),
    e("path", { d: "M12 16v5" }, null, -1),
    e("path", { d: "M12 5m-4 0a4 2 0 1 0 8 0a4 2 0 1 0 -8 0" }, null, -1),
    e("path", { d: "M8 5c0 6.075 1.79 11 4 11s4 -4.925 4 -11" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
