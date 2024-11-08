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
function l(h, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M19.5 12.572l-.468 .464m-6.077 6.019l-.955 .945l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" }, null, -1),
    e("path", { d: "M16 22l5 -5" }, null, -1),
    e("path", { d: "M21 21.5v-4.5h-4.5" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};
