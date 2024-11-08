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
function r(h, t) {
  return l(), n("svg", o, t[0] || (t[0] = [
    e("path", { d: "M17 8v-3a1 1 0 0 0 -1 -1h-8m-3.413 .584a2 2 0 0 0 1.413 3.416h2m4 0h6a1 1 0 0 1 1 1v3" }, null, -1),
    e("path", { d: "M19 19a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" }, null, -1),
    e("path", { d: "M16 12h4v4m-4 0a2 2 0 0 1 -2 -2" }, null, -1),
    e("path", { d: "M3 3l18 18" }, null, -1)
  ]));
}
const a = { render: r };
export {
  a as default,
  r as render
};
