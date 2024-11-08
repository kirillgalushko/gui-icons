import { openBlock as l, createElementBlock as o, createElementVNode as e } from "vue";
const n = {
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
  return l(), o("svg", n, t[0] || (t[0] = [
    e("path", { d: "M11.505 17.01l-1.505 -3.01l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.677 10.184" }, null, -1),
    e("path", { d: "M20 21l2 -2l-2 -2" }, null, -1),
    e("path", { d: "M17 17l-2 2l2 2" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};
