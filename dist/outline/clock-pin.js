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
function r(i, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M20.971 11.278a9 9 0 1 0 -8.313 9.698" }, null, -1),
    e("path", { d: "M12 7v5l1.5 1.5" }, null, -1),
    e("path", { d: "M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" }, null, -1),
    e("path", { d: "M19 18v.01" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};
