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
function p(r, t) {
  return h(), e("svg", a, t[0] || (t[0] = [
    o('<path d="M17 18h2a2 2 0 1 0 0 -4h-2v-4h4"></path><path d="M4 6v12"></path><path d="M12 6v12"></path><path d="M11 18h2"></path><path d="M3 18h2"></path><path d="M4 12h8"></path><path d="M3 6h2"></path><path d="M11 6h2"></path>', 8)
  ]));
}
const d = { render: p };
export {
  d as default,
  p as render
};
