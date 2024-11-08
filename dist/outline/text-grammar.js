import { openBlock as e, createElementBlock as h, createStaticVNode as r } from "vue";
const o = {
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
function a(n, t) {
  return e(), h("svg", o, t[0] || (t[0] = [
    r('<path d="M14 9a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path><path d="M4 12v-5a3 3 0 1 1 6 0v5"></path><path d="M4 9h6"></path><path d="M20 6v6"></path><path d="M4 16h12"></path><path d="M4 20h6"></path><path d="M14 20l2 2l5 -5"></path>', 7)
  ]));
}
const p = { render: a };
export {
  p as default,
  a as render
};
