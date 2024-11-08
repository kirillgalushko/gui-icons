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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function n(a, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M8 4h-2l-3 10"></path><path d="M16 4h2l3 10"></path><path d="M10 16l4 0"></path><path d="M21 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5"></path><path d="M10 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
