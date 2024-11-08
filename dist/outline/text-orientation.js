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
    r('<path d="M9 15l-5 -5c-1.367 -1.367 -1.367 -3.633 0 -5s3.633 -1.367 5 0l5 5"></path><path d="M5.5 11.5l5 -5"></path><path d="M21 12l-9 9"></path><path d="M21 12v4"></path><path d="M21 12h-4"></path>', 5)
  ]));
}
const a = { render: h };
export {
  a as default,
  h as render
};
