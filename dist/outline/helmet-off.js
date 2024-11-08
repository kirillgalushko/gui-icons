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
function l(i, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M8.633 4.654a9 9 0 0 1 11.718 11.7m-1.503 2.486a9.008 9.008 0 0 1 -1.192 1.16h-11.312a9 9 0 0 1 -.185 -13.847" }, null, -1),
    e("path", { d: "M20 9h-7m-2.768 1.246c.507 2 1.596 3.418 3.268 4.254c.524 .262 1.07 .49 1.64 .683" }, null, -1),
    e("path", { d: "M3 3l18 18" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};
