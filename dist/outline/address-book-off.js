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
    o('<path d="M8 4h10a2 2 0 0 1 2 2v10m-.57 3.399c-.363 .37 -.87 .601 -1.43 .601h-10a2 2 0 0 1 -2 -2v-12"></path><path d="M10 16h6"></path><path d="M11 11a2 2 0 0 0 2 2m2 -2a2 2 0 0 0 -2 -2"></path><path d="M4 8h3"></path><path d="M4 12h3"></path><path d="M4 16h3"></path><path d="M3 3l18 18"></path>', 7)
  ]));
}
const i = { render: a };
export {
  i as default,
  a as render
};
