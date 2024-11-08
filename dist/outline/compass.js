import { openBlock as e, createElementBlock as o, createStaticVNode as h } from "vue";
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
  return e(), o("svg", r, t[0] || (t[0] = [
    h('<path d="M8 16l2 -6l6 -2l-2 6l-6 2"></path><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M12 3l0 2"></path><path d="M12 19l0 2"></path><path d="M3 12l2 0"></path><path d="M19 12l2 0"></path>', 6)
  ]));
}
const i = { render: a };
export {
  i as default,
  a as render
};
