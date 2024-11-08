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
function n(i, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M8 8h-3v3h6m4 0h4v-3h-7"></path><path d="M17.5 11l-.323 2.154m-.525 3.497l-.652 4.349h-8l-1.5 -10"></path><path d="M6 8v-1c0 -.296 .064 -.577 .18 -.83m2.82 -1.17h7a2 2 0 0 1 2 2v1"></path><path d="M15 5v-2"></path><path d="M3 3l18 18"></path>', 5)
  ]));
}
const a = { render: n };
export {
  a as default,
  n as render
};
