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
    o('<path d="M8 3h-2l-3 9"></path><path d="M16 3h2l3 9"></path><path d="M3 12v7a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707 -.293l2 -2a1 1 0 0 1 1.414 0l2 2a1 1 0 0 0 .707 .293h4.586a1 1 0 0 0 1 -1v-7h-18z"></path><path d="M7 16h1"></path><path d="M16 16h1"></path>', 5)
  ]));
}
const d = { render: a };
export {
  d as default,
  a as render
};
