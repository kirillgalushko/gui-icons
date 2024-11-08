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
function n(i, t) {
  return e(), o("svg", h, t[0] || (t[0] = [
    r('<path d="M3 17l4 4"></path><path d="M7 17l-4 4"></path><path d="M17 3l4 4"></path><path d="M21 3l-4 4"></path><path d="M14 5a2 2 0 0 0 -2 2v10a2 2 0 0 1 -2 2"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
