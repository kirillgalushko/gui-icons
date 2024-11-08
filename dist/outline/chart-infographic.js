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
    o('<path d="M7 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path><path d="M7 3v4h4"></path><path d="M9 17l0 4"></path><path d="M17 14l0 7"></path><path d="M13 13l0 8"></path><path d="M21 12l0 9"></path>', 6)
  ]));
}
const p = { render: a };
export {
  p as default,
  a as render
};
