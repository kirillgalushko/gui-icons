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
    h('<path d="M15 20l-6 -3l-6 3v-13l6 -3l6 3l6 -3v8.5"></path><path d="M9 4v13"></path><path d="M15 7v13"></path><path d="M19 16v3"></path><path d="M19 22v.01"></path>', 5)
  ]));
}
const l = { render: r };
export {
  l as default,
  r as render
};
