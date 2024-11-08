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
    o('<path d="M4 3h8l-1 9h-6z"></path><path d="M7 18h2v3h-2z"></path><path d="M20 3v12h-5c-.023 -3.681 .184 -7.406 5 -12z"></path><path d="M20 15v6h-1v-3"></path><path d="M8 12l0 6"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
