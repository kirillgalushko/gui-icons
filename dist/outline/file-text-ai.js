import { openBlock as e, createElementBlock as h, createStaticVNode as a } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function p(r, t) {
  return e(), h("svg", o, t[0] || (t[0] = [
    a('<path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M10 21h-3a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v3.5"></path><path d="M9 9h1"></path><path d="M9 13h2.5"></path><path d="M9 17h1"></path><path d="M14 21v-4a2 2 0 1 1 4 0v4"></path><path d="M14 19h4"></path><path d="M21 15v6"></path>', 8)
  ]));
}
const n = { render: p };
export {
  n as default,
  p as render
};
