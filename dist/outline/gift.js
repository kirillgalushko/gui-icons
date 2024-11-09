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
function r(a, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M3 8m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" }, null, -1),
    e("path", { d: "M12 8l0 13" }, null, -1),
    e("path", { d: "M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" }, null, -1),
    e("path", { d: "M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" }, null, -1)
  ]));
}
const i = { render: r };
export {
  i as default,
  r as render
};