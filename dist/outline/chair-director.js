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
function i(n, t) {
  return e(), h("svg", o, t[0] || (t[0] = [
    r('<path d="M6 21l12 -9"></path><path d="M6 12l12 9"></path><path d="M5 12h14"></path><path d="M6 3v9"></path><path d="M18 3v9"></path><path d="M6 8h12"></path><path d="M6 5h12"></path>', 7)
  ]));
}
const p = { render: i };
export {
  p as default,
  i as render
};
