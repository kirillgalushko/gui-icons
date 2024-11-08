import { openBlock as c, createElementBlock as e, createStaticVNode as l } from "vue";
const i = {
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
function t(o, r) {
  return c(), e("svg", i, r[0] || (r[0] = [
    l('<path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle><circle cx="15.5" cy="7.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="12" r=".5" fill="currentColor"></circle><circle cx="15.5" cy="12" r=".5" fill="currentColor"></circle><circle cx="15.5" cy="16.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="16.5" r=".5" fill="currentColor"></circle>', 7)
  ]));
}
const h = { render: t };
export {
  h as default,
  t as render
};
