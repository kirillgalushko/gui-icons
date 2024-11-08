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
function n(a, t) {
  return e(), o("svg", h, t[0] || (t[0] = [
    r('<path d="M4 15l3 3l3 -3"></path><path d="M7 6v12"></path><path d="M17 3a2 2 0 0 1 2 2v3a2 2 0 1 1 -4 0v-3a2 2 0 0 1 2 -2z"></path><path d="M17 16m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M19 16v3a2 2 0 0 1 -2 2h-1.5"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
