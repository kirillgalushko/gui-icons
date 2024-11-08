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
    o('<path d="M3 6l5 0"></path><path d="M7 18l7 0"></path><path d="M4.5 6l5.5 7v5"></path><path d="M10 13l6 -5"></path><path d="M12.5 8l5 0"></path><path d="M20 11l0 4"></path><path d="M20 18l0 .01"></path>', 7)
  ]));
}
const p = { render: a };
export {
  p as default,
  a as render
};
