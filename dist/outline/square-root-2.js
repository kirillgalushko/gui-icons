import { openBlock as o, createElementBlock as n, createElementVNode as e } from "vue";
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
function l(h, t) {
  return o(), n("svg", r, t[0] || (t[0] = [
    e("path", { d: "M13 12h1c1 0 1 1 2.016 3.527c.984 2.473 .984 3.473 1.984 3.473h1" }, null, -1),
    e("path", { d: "M12 19c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5" }, null, -1),
    e("path", { d: "M3 12h1l3 8l3 -16h10" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};
