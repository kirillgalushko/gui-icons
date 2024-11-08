import { openBlock as e, createElementBlock as r, createStaticVNode as o } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function n(a, t) {
  return e(), r("svg", h, t[0] || (t[0] = [
    o('<path d="M3 18l3.279 -11.476a.75 .75 0 0 1 1.442 0l3.279 11.476"></path><path d="M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4"></path><path d="M17 20v-2"></path><path d="M18 6v-2"></path><path d="M4.5 14h5"></path>', 5)
  ]));
}
const l = { render: n };
export {
  l as default,
  n as render
};
