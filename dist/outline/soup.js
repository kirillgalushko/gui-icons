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
function l(a, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M4 11h16a1 1 0 0 1 1 1v.5c0 1.5 -2.517 5.573 -4 6.5v1a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-1c-1.687 -1.054 -4 -5 -4 -6.5v-.5a1 1 0 0 1 1 -1z" }, null, -1),
    e("path", { d: "M12 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" }, null, -1),
    e("path", { d: "M16 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" }, null, -1),
    e("path", { d: "M8 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" }, null, -1)
  ]));
}
const h = { render: l };
export {
  h as default,
  l as render
};
