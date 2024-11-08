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
function p(r, t) {
  return h(), e("svg", o, t[0] || (t[0] = [
    a('<path d="M3 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path><path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M10 5h7c2.761 0 5 3.134 5 7v5h-2"></path><path d="M16 17h-8"></path><path d="M16 5l1.5 7h4.5"></path><path d="M9.5 10h7.5"></path><path d="M12 5v5"></path><path d="M5 9v11"></path>', 8)
  ]));
}
const d = { render: p };
export {
  d as default,
  p as render
};
