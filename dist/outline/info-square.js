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
function h(i, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M12 9h.01" }, null, -1),
    e("path", { d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" }, null, -1),
    e("path", { d: "M11 12h1v4h1" }, null, -1)
  ]));
}
const d = { render: h };
export {
  d as default,
  h as render
};
