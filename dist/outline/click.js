import { openBlock as e, createElementBlock as h, createStaticVNode as o } from "vue";
const l = {
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
function r(n, t) {
  return e(), h("svg", l, t[0] || (t[0] = [
    o('<path d="M3 12l3 0"></path><path d="M12 3l0 3"></path><path d="M7.8 7.8l-2.2 -2.2"></path><path d="M16.2 7.8l2.2 -2.2"></path><path d="M7.8 16.2l-2.2 2.2"></path><path d="M12 12l9 3l-4 2l-2 4l-3 -9"></path>', 6)
  ]));
}
const a = { render: r };
export {
  a as default,
  r as render
};
