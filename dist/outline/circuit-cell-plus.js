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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function i(n, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M2 12h9"></path><path d="M15 12h7"></path><path d="M11 5v14"></path><path d="M15 9v6"></path><path d="M3 5h4"></path><path d="M5 3v4"></path>', 6)
  ]));
}
const d = { render: i };
export {
  d as default,
  i as render
};
