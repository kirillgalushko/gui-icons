import { openBlock as e, createElementBlock as o, createStaticVNode as r } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function h(i, t) {
  return e(), o("svg", n, t[0] || (t[0] = [
    r('<path d="M3 4l18 0"></path><path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10"></path><path d="M12 16l0 4"></path><path d="M9 20l6 0"></path><path d="M8 12l3 -3l2 2l3 -3"></path>', 5)
  ]));
}
const a = { render: h };
export {
  a as default,
  h as render
};
