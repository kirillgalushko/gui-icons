import { openBlock as e, createElementBlock as h, createStaticVNode as o } from "vue";
const n = {
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
function r(a, t) {
  return e(), h("svg", n, t[0] || (t[0] = [
    o('<path d="M4 5h7"></path><path d="M7 4c0 4.846 0 7 .5 8"></path><path d="M10 8.5c0 2.286 -2 4.5 -3.5 4.5s-2.5 -1.135 -2.5 -2c0 -2 1 -3 3 -3s5 .57 5 2.857c0 1.524 -.667 2.571 -2 3.143"></path><path d="M12 20l4 -9l4 9"></path><path d="M19.1 18h-6.2"></path>', 5)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
