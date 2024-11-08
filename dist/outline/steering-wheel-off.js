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
function n(a, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M20.04 16.048a9 9 0 0 0 -12.083 -12.09m-2.32 1.678a9 9 0 1 0 12.737 12.719"></path><path d="M10.595 10.576a2 2 0 1 0 2.827 2.83"></path><path d="M12 14v7"></path><path d="M10 12l-6.75 -2"></path><path d="M15.542 11.543l5.208 -1.543"></path><path d="M3 3l18 18"></path>', 6)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
