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
    o('<path d="M8 4h-2l-3 10"></path><path d="M16 4h2l3 10"></path><path d="M10 16h4"></path><path d="M21 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5"></path><path d="M10 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5"></path><path d="M4 14l4.5 4.5"></path><path d="M15 14l4.5 4.5"></path>', 7)
  ]));
}
const l = { render: a };
export {
  l as default,
  a as render
};
