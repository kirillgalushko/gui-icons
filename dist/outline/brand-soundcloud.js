import { openBlock as l, createElementBlock as n, createElementVNode as e } from "vue";
const o = {
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
function r(d, t) {
  return l(), n("svg", o, t[0] || (t[0] = [
    e("path", { d: "M17 11h1c1.38 0 3 1.274 3 3c0 1.657 -1.5 3 -3 3l-6 0v-10c3 0 4.5 1.5 5 4z" }, null, -1),
    e("path", { d: "M9 8l0 9" }, null, -1),
    e("path", { d: "M6 17l0 -7" }, null, -1),
    e("path", { d: "M3 16l0 -2" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};
