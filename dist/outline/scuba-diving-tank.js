import { openBlock as e, createElementBlock as r, createStaticVNode as o } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function i(n, t) {
  return e(), r("svg", h, t[0] || (t[0] = [
    o('<path d="M8 11a4 4 0 1 1 8 0v5h-8z"></path><path d="M8 16v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-3"></path><path d="M9 4h6"></path><path d="M12 7v-3"></path><path d="M8 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><circle cx="12" cy="4" r=".5" fill="currentColor"></circle>', 6)
  ]));
}
const c = { render: i };
export {
  c as default,
  i as render
};
