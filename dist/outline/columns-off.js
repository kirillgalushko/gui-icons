import { openBlock as h, createElementBlock as e, createStaticVNode as o } from "vue";
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
function p(n, t) {
  return h(), e("svg", a, t[0] || (t[0] = [
    o('<path d="M4 6h2"></path><path d="M4 10h5.5"></path><path d="M4 14h5.5"></path><path d="M4 18h5.5"></path><path d="M14.5 6h5.5"></path><path d="M14.5 10h5.5"></path><path d="M18 14h2"></path><path d="M14.5 18h3.5"></path><path d="M3 3l18 18"></path>', 9)
  ]));
}
const d = { render: p };
export {
  d as default,
  p as render
};
