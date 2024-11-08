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
    o('<path d="M15 8h.01"></path><path d="M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5"></path><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4"></path><path d="M14 14l1 -1c.653 -.629 1.413 -.815 2.13 -.559"></path><path d="M19 16v6"></path><path d="M22 19l-3 3l-3 -3"></path>', 6)
  ]));
}
const p = { render: r };
export {
  p as default,
  r as render
};
