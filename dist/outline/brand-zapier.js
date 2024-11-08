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
    r('<path d="M3 12h6"></path><path d="M21 12h-6"></path><path d="M12 3v6"></path><path d="M12 15v6"></path><path d="M5.636 5.636l4.243 4.243"></path><path d="M18.364 18.364l-4.243 -4.243"></path><path d="M18.364 5.636l-4.243 4.243"></path><path d="M9.879 14.121l-4.243 4.243"></path>', 8)
  ]));
}
const d = { render: a };
export {
  d as default,
  a as render
};
