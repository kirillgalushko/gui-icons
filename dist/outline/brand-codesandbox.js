import { openBlock as e, createElementBlock as l, createStaticVNode as o } from "vue";
const h = {
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
function r(n, t) {
  return e(), l("svg", h, t[0] || (t[0] = [
    o('<path d="M20 7.5v9l-4 2.25l-4 2.25l-4 -2.25l-4 -2.25v-9l4 -2.25l4 -2.25l4 2.25z"></path><path d="M12 12l4 -2.25l4 -2.25"></path><path d="M12 12l0 9"></path><path d="M12 12l-4 -2.25l-4 -2.25"></path><path d="M20 12l-4 2v4.75"></path><path d="M4 12l4 2l0 4.75"></path><path d="M8 5.25l4 2.25l4 -2.25"></path>', 7)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
