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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function h(l, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M10 8h4" }, null, -1),
    e("path", { d: "M21 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" }, null, -1),
    e("path", { d: "M12 8v8" }, null, -1),
    e("path", { d: "M7 10a2 2 0 1 0 -4 0v4a2 2 0 1 0 4 0" }, null, -1)
  ]));
}
const d = { render: h };
export {
  d as default,
  h as render
};
