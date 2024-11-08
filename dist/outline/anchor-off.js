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
function a(n, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M12 12v9"></path><path d="M4 13a8 8 0 0 0 14.138 5.13m1.44 -2.56a7.99 7.99 0 0 0 .422 -2.57"></path><path d="M21 13h-2"></path><path d="M5 13h-2"></path><path d="M12.866 8.873a3 3 0 1 0 -3.737 -3.747"></path><path d="M3 3l18 18"></path>', 6)
  ]));
}
const d = { render: a };
export {
  d as default,
  a as render
};
