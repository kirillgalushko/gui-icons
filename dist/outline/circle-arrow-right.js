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
function o(i, t) {
  return r(), l("svg", n, t[0] || (t[0] = [
    e("path", { d: "M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" }, null, -1),
    e("path", { d: "M16 12l-4 -4" }, null, -1),
    e("path", { d: "M16 12h-8" }, null, -1),
    e("path", { d: "M12 16l4 -4" }, null, -1)
  ]));
}
const d = { render: o };
export {
  d as default,
  o as render
};
