import { openBlock as h, createElementBlock as e, createStaticVNode as a } from "vue";
const p = {
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
function o(r, t) {
  return h(), e("svg", p, t[0] || (t[0] = [
    a('<path d="M5 5m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z"></path><path d="M8 10v-2h2m6 6v2h-2m-4 0h-2v-2m8 -4v-2h-2"></path><path d="M3 10h2"></path><path d="M3 14h2"></path><path d="M10 3v2"></path><path d="M14 3v2"></path><path d="M21 10h-2"></path><path d="M21 14h-2"></path><path d="M14 21v-2"></path><path d="M10 21v-2"></path>', 10)
  ]));
}
const n = { render: o };
export {
  n as default,
  o as render
};
