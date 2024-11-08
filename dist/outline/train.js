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
    o('<path d="M21 13c0 -3.87 -3.37 -7 -10 -7h-8"></path><path d="M3 15h16a2 2 0 0 0 2 -2"></path><path d="M3 6v5h17.5"></path><path d="M3 10l0 4"></path><path d="M8 11l0 -5"></path><path d="M13 11l0 -4.5"></path><path d="M3 19l18 0"></path>', 7)
  ]));
}
const p = { render: a };
export {
  p as default,
  a as render
};
