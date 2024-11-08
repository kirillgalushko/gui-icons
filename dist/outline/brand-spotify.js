import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
const r = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function l(i, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, null, -1),
    e("path", { d: "M8 11.973c2.5 -1.473 5.5 -.973 7.5 .527" }, null, -1),
    e("path", { d: "M9 15c1.5 -1 4 -1 5 .5" }, null, -1),
    e("path", { d: "M7 9c2 -1 6 -2 10 .5" }, null, -1)
  ]));
}
const h = { render: l };
export {
  h as default,
  l as render
};
