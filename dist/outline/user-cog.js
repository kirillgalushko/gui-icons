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
    a('<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h2.5"></path><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M19.001 15.5v1.5"></path><path d="M19.001 21v1.5"></path><path d="M22.032 17.25l-1.299 .75"></path><path d="M17.27 20l-1.3 .75"></path><path d="M15.97 17.25l1.3 .75"></path><path d="M20.733 20l1.3 .75"></path>', 9)
  ]));
}
const n = { render: p };
export {
  n as default,
  p as render
};