import { openBlock as e, createElementBlock as h, createStaticVNode as o } from "vue";
const n = {
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
function r(a, t) {
  return e(), h("svg", n, t[0] || (t[0] = [
    o('<path d="M10 21h-2a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v3.5"></path><path d="M17 17l-4 -2.5l4 -2.5l4 2.5v4.5l-4 2.5z"></path><path d="M13 14.5v4.5l4 2.5"></path><path d="M17 17l4 -2.5"></path><path d="M11 4h2"></path>', 5)
  ]));
}
const l = { render: r };
export {
  l as default,
  r as render
};
