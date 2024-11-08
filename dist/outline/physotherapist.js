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
function r(n, t) {
  return e(), h("svg", a, t[0] || (t[0] = [
    o('<path d="M9 15l-1 -3l4 -2l4 1h3.5"></path><path d="M4 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 6m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 17v-7"></path><path d="M8 20h7l1 -4l4 -2"></path><path d="M18 20h3"></path>', 6)
  ]));
}
const p = { render: r };
export {
  p as default,
  r as render
};
