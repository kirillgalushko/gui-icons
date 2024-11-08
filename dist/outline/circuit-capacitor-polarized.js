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
function i(n, t) {
  return e(), o("svg", h, t[0] || (t[0] = [
    r('<path d="M22 12h-8"></path><path d="M2 12h8"></path><path d="M10 7v10"></path><path d="M14 7v10"></path><path d="M17 5h4"></path><path d="M19 3v4"></path>', 6)
  ]));
}
const d = { render: i };
export {
  d as default,
  i as render
};
