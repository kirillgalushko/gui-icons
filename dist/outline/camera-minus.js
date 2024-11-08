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
function h(a, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M12 20h-7a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v6" }, null, -1),
    e("path", { d: "M16 19h6" }, null, -1),
    e("path", { d: "M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" }, null, -1)
  ]));
}
const l = { render: h };
export {
  l as default,
  h as render
};
