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
    r('<path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path><path d="M15 9l6 -6"></path><path d="M21 7v-4h-4"></path><path d="M9 9l-6 -6"></path><path d="M3 7v-4h4"></path><path d="M5.5 8.5l3 -3"></path><path d="M12 16v5"></path><path d="M9.5 19h5"></path>', 8)
  ]));
}
const p = { render: a };
export {
  p as default,
  a as render
};
