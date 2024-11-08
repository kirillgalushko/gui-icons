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
function r(i, t) {
  return e(), h("svg", a, t[0] || (t[0] = [
    o('<path d="M6 3h8.5l4.5 4.5v12.5a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1z"></path><path d="M9 11h3v6"></path><path d="M15 17v.01"></path><path d="M15 14v.01"></path><path d="M15 11v.01"></path><path d="M9 14v.01"></path><path d="M9 17v.01"></path>', 7)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
