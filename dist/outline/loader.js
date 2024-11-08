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
function l(a, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M12 6l0 -3"></path><path d="M16.25 7.75l2.15 -2.15"></path><path d="M18 12l3 0"></path><path d="M16.25 16.25l2.15 2.15"></path><path d="M12 18l0 3"></path><path d="M7.75 16.25l-2.15 2.15"></path><path d="M6 12l-3 0"></path><path d="M7.75 7.75l-2.15 -2.15"></path>', 8)
  ]));
}
const p = { render: l };
export {
  p as default,
  l as render
};
