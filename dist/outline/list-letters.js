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
function a(n, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M11 6h9"></path><path d="M11 12h9"></path><path d="M11 18h9"></path><path d="M4 10v-4.5a1.5 1.5 0 0 1 3 0v4.5"></path><path d="M4 8h3"></path><path d="M4 20h1.5a1.5 1.5 0 0 0 0 -3h-1.5h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6z"></path>', 6)
  ]));
}
const d = { render: a };
export {
  d as default,
  a as render
};
