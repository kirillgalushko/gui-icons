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
    o('<path d="M9 6h11"></path><path d="M12 12h8"></path><path d="M15 18h5"></path><path d="M5 6v.01"></path><path d="M8 12v.01"></path><path d="M11 18v.01"></path>', 6)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
