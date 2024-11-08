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
function n(i, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M14 6h6v12h-2l-2 2l-1 -2h-1z"></path><path d="M4 12h6.5"></path><path d="M10.5 6h-5"></path><path d="M6 4c-.5 2.5 -1.5 3.5 -2.5 4.5"></path><path d="M8 6v7c0 4.5 -2 5.5 -4 7"></path><path d="M11 18l-3 -5"></path>', 6)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
