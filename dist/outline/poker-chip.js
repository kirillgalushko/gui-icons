import { openBlock as h, createElementBlock as e, createStaticVNode as a } from "vue";
const p = {
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
function o(r, t) {
  return h(), e("svg", p, t[0] || (t[0] = [
    a('<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"></path><path d="M12 3v4"></path><path d="M12 17v4"></path><path d="M3 12h4"></path><path d="M17 12h4"></path><path d="M18.364 5.636l-2.828 2.828"></path><path d="M8.464 15.536l-2.828 2.828"></path><path d="M5.636 5.636l2.828 2.828"></path><path d="M15.536 15.536l2.828 2.828"></path>', 10)
  ]));
}
const n = { render: o };
export {
  n as default,
  o as render
};
