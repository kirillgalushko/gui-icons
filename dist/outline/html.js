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
function n(a, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M13 16v-8l2 5l2 -5v8"></path><path d="M1 16v-8"></path><path d="M5 8v8"></path><path d="M1 12h4"></path><path d="M7 8h4"></path><path d="M9 8v8"></path><path d="M20 8v8h3"></path>', 7)
  ]));
}
const p = { render: n };
export {
  p as default,
  n as render
};
