import { openBlock as e, createElementBlock as o, createStaticVNode as r } from "vue";
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
function h(i, t) {
  return e(), o("svg", n, t[0] || (t[0] = [
    r('<path d="M4 8l4 -4"></path><path d="M14 4l-10 10"></path><path d="M4 20l16 -16"></path><path d="M20 10l-10 10"></path><path d="M20 16l-4 4"></path>', 5)
  ]));
}
const d = { render: h };
export {
  d as default,
  h as render
};
