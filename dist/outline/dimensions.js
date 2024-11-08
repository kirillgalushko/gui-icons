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
function a(n, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M3 5h11"></path><path d="M12 7l2 -2l-2 -2"></path><path d="M5 3l-2 2l2 2"></path><path d="M19 10v11"></path><path d="M17 19l2 2l2 -2"></path><path d="M21 12l-2 -2l-2 2"></path><path d="M3 10m0 2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2z"></path>', 7)
  ]));
}
const i = { render: a };
export {
  i as default,
  a as render
};
