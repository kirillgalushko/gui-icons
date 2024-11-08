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
    a('<path d="M7 21h1a1 1 0 0 0 1 -1v-1h0a3 3 0 0 1 6 0m3 2h1a1 1 0 0 0 1 -1v-15l-3 -2l-3 2v6h-4v-6l-3 -2l-3 2v15a1 1 0 0 0 1 1h2m8 -2v1a1 1 0 0 0 1 1h2"></path><path d="M7 7h0v.01"></path><path d="M7 10h0v.01"></path><path d="M7 13h0v.01"></path><path d="M17 7h0v.01"></path><path d="M17 10h0v.01"></path><path d="M17 13h0v.01"></path>', 7)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
