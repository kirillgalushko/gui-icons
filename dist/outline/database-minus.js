import { openBlock as e, createElementBlock as o, createStaticVNode as h } from "vue";
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
function r(i, t) {
  return e(), o("svg", n, t[0] || (t[0] = [
    h('<path d="M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3"></path><path d="M4 6v6c0 1.657 3.582 3 8 3s8 -1.343 8 -3v-6"></path><path d="M4 12v6c0 1.657 3.582 3 8 3c.164 0 .328 -.002 .49 -.006"></path><path d="M20 15v-3"></path><path d="M16 19h6"></path>', 5)
  ]));
}
const s = { render: r };
export {
  s as default,
  r as render
};
