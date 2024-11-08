import { openBlock as e, createElementBlock as o, createStaticVNode as r } from "vue";
const h = {
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
function a(n, t) {
  return e(), o("svg", h, t[0] || (t[0] = [
    r('<path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"></path><path d="M9 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M15 8l2 0"></path><path d="M15 12l2 0"></path><path d="M7 16l10 0"></path>', 5)
  ]));
}
const d = { render: a };
export {
  d as default,
  a as render
};
