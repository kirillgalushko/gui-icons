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
    e("path", { d: "M5 21h14" }, null, -1),
    e("path", { d: "M17 21v-5h1a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-1v-4a5 5 0 0 0 -10 0v4h-1a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h1v5" }, null, -1),
    e("path", { d: "M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, null, -1),
    e("path", { d: "M6 8h12" }, null, -1)
  ]));
}
const a = { render: h };
export {
  a as default,
  h as render
};
