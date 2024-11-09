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
function n(p, t) {
  return h(), e("svg", o, t[0] || (t[0] = [
    a('<path d="M15 12h4.09c1.055 0 1.91 .895 1.91 2s-.855 2 -1.91 2c1.055 0 1.91 .895 1.91 2s-.855 2 -1.91 2h-4.09"></path><path d="M16 16h4"></path><path d="M16 11v10v-9"></path><path d="M19 11v1"></path><path d="M19 20v1"></path><path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M7 5h8"></path><path d="M7 5v8a3 3 0 0 0 3 3h1"></path>', 9)
  ]));
}
const i = { render: n };
export {
  i as default,
  n as render
};