import { openBlock as r, createElementBlock as l, createElementVNode as e } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function o(h, t) {
  return r(), l("svg", n, t[0] || (t[0] = [
    e("path", { d: "M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" }, null, -1),
    e("path", { d: "M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" }, null, -1),
    e("path", { d: "M12 9l0 3" }, null, -1),
    e("path", { d: "M12 15l.01 0" }, null, -1)
  ]));
}
const d = { render: o };
export {
  d as default,
  o as render
};
