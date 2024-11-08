import { openBlock as n, createElementBlock as l, createElementVNode as e } from "vue";
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
  return n(), l("svg", o, t[0] || (t[0] = [
    e("path", { d: "M7 15h10v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4z" }, null, -1),
    e("path", { d: "M12 9a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3" }, null, -1),
    e("path", { d: "M12 11a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3" }, null, -1),
    e("path", { d: "M12 15l0 -6" }, null, -1)
  ]));
}
const a = { render: r };
export {
  a as default,
  r as render
};