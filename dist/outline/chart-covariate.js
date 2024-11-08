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
    o('<path d="M18 11h.009"></path><path d="M14 15h.009"></path><path d="M12 6h.009"></path><path d="M8 10h.009"></path><path d="M3 21l17 -17"></path><path d="M3 3v18h18"></path>', 6)
  ]));
}
const d = { render: a };
export {
  d as default,
  a as render
};
