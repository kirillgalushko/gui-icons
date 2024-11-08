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
function p(r, t) {
  return e(), h("svg", a, t[0] || (t[0] = [
    o('<path d="M4 18v.01"></path><path d="M8 18v.01"></path><path d="M12 18v.01"></path><path d="M16 18v.01"></path><path d="M20 18v.01"></path><path d="M18 12h2"></path><path d="M11 12h2"></path><path d="M4 12h2"></path><path d="M4 6h16"></path>', 9)
  ]));
}
const n = { render: p };
export {
  n as default,
  p as render
};
