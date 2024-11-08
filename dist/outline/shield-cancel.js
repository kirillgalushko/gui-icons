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
    e("path", { d: "M12.277 20.925c-.092 .026 -.184 .051 -.277 .075a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 .145 6.232" }, null, -1),
    e("path", { d: "M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, null, -1),
    e("path", { d: "M17 21l4 -4" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};
