import { openBlock as h, createElementBlock as e, createStaticVNode as a } from "vue";
const o = {
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
function r(n, t) {
  return h(), e("svg", o, t[0] || (t[0] = [
    a('<path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M5 7v-2a2 2 0 0 1 2 -2h7l5 5v2"></path><path d="M19 19a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2"></path><path d="M5 16h.01"></path><path d="M5 13h.01"></path><path d="M5 10h.01"></path><path d="M19 13h.01"></path><path d="M19 16h.01"></path>', 8)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
