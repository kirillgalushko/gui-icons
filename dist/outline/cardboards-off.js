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
function r(a, t) {
  return l(), n("svg", o, t[0] || (t[0] = [
    e("path", { d: "M20.96 16.953c.026 -.147 .04 -.298 .04 -.453v-8.5a2 2 0 0 0 -2 -2h-9m-4 0h-1a2 2 0 0 0 -2 2v8.5a2.5 2.5 0 0 0 2.5 2.5h1.06a3 3 0 0 0 2.34 -1.13l1.54 -1.92a2 2 0 0 1 3.12 0l1.54 1.92a3 3 0 0 0 2.34 1.13h1.06c.155 0 .307 -.014 .454 -.041" }, null, -1),
    e("path", { d: "M8 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, null, -1),
    e("path", { d: "M16.714 12.7a1 1 0 0 0 -1.417 -1.411l1.417 1.41z" }, null, -1),
    e("path", { d: "M3 3l18 18" }, null, -1)
  ]));
}
const i = { render: r };
export {
  i as default,
  r as render
};
