import { openBlock as e, createElementBlock as o, createStaticVNode as r } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function h(l, t) {
  return e(), o("svg", n, t[0] || (t[0] = [
    r('<path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v8.5"></path><path d="M9 4v13"></path><path d="M15 7v8"></path><path d="M19 16v6"></path><path d="M22 19l-3 3l-3 -3"></path>', 5)
  ]));
}
const a = { render: h };
export {
  a as default,
  h as render
};