import { openBlock as e, createElementBlock as h, createStaticVNode as o } from "vue";
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
function i(n, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M2 12h2"></path><path d="M20 12h2"></path><path d="M6 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M18 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M8 12h8"></path>', 5)
  ]));
}
const d = { render: i };
export {
  d as default,
  i as render
};
