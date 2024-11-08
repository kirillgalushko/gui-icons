import { openBlock as h, createElementBlock as e, createStaticVNode as a } from "vue";
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
function p(d, t) {
  return h(), e("svg", o, t[0] || (t[0] = [
    a('<path d="M19 13h-5a1 1 0 0 0 -1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1 -1v-5a1 1 0 0 0 -1 -1z"></path><path d="M20 9v.01"></path><path d="M20 4v.01"></path><path d="M15 4v.01"></path><path d="M9 4v.01"></path><path d="M9 20v.01"></path><path d="M4 4v.01"></path><path d="M4 9v.01"></path><path d="M4 15v.01"></path><path d="M4 20v.01"></path>', 10)
  ]));
}
const r = { render: p };
export {
  r as default,
  p as render
};
