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
    o('<path d="M8 3v1m0 4v13"></path><path d="M16 3v9m0 4v5"></path><path d="M8 14h6"></path><path d="M8 10h2m4 0h2"></path><path d="M10 6h6"></path><path d="M8 18h8"></path><path d="M3 3l18 18"></path>', 7)
  ]));
}
const i = { render: n };
export {
  i as default,
  n as render
};
