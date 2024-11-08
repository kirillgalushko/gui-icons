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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function a(n, t) {
  return e(), o("svg", h, t[0] || (t[0] = [
    r('<path d="M7 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M17 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M10 12h3l2 -2.5"></path><path d="M15 14.5l-2 -2.5"></path>', 5)
  ]));
}
const p = { render: a };
export {
  p as default,
  a as render
};
