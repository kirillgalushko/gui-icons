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
    o('<path d="M8 21h-2a3 3 0 0 1 -3 -3v-1h5.5"></path><path d="M17 8.5v-3.5a2 2 0 1 1 2 2h-2"></path><path d="M19 3h-11a3 3 0 0 0 -3 3v11"></path><path d="M9 7h4"></path><path d="M9 11h4"></path><path d="M18.42 12.61a2.1 2.1 0 0 1 2.97 2.97l-6.39 6.42h-3v-3z"></path>', 6)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
