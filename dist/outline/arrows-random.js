import { openBlock as e, createElementBlock as h, createStaticVNode as o } from "vue";
const a = {
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
function r(l, t) {
  return e(), h("svg", a, t[0] || (t[0] = [
    o('<path d="M20 21h-4v-4"></path><path d="M16 21l5 -5"></path><path d="M6.5 9.504l-3.5 -2l2 -3.504"></path><path d="M3 7.504l6.83 -1.87"></path><path d="M4 16l4 -1l1 4"></path><path d="M8 15l-3.5 6"></path><path d="M21 5l-.5 4l-4 -.5"></path><path d="M20.5 9l-4.5 -5.5"></path>', 8)
  ]));
}
const p = { render: r };
export {
  p as default,
  r as render
};
