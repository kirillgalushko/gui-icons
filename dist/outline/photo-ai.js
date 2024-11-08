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
    o('<path d="M15 8h.01"></path><path d="M10 21h-4a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5"></path><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l1 1"></path><path d="M14 21v-4a2 2 0 1 1 4 0v4"></path><path d="M14 19h4"></path><path d="M21 15v6"></path>', 6)
  ]));
}
const p = { render: r };
export {
  p as default,
  r as render
};
