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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function o(r, t) {
  return h(), e("svg", p, t[0] || (t[0] = [
    a('<path d="M4 7m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v7a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z"></path><path d="M7 16v4"></path><path d="M7.5 16l9 -9"></path><path d="M13.5 16l6.5 -6.5"></path><path d="M4 13.5l6.5 -6.5"></path><path d="M17 16v4"></path><path d="M5 20h4"></path><path d="M15 20h4"></path><path d="M17 7v-2"></path><path d="M7 7v-2"></path>', 10)
  ]));
}
const n = { render: o };
export {
  n as default,
  o as render
};
