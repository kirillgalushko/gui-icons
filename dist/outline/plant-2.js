import { openBlock as e, createElementBlock as o, createStaticVNode as a } from "vue";
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
function n(r, t) {
  return e(), o("svg", h, t[0] || (t[0] = [
    a('<path d="M2 9a10 10 0 1 0 20 0"></path><path d="M12 19a10 10 0 0 1 10 -10"></path><path d="M2 9a10 10 0 0 1 10 10"></path><path d="M12 4a9.7 9.7 0 0 1 2.99 7.5"></path><path d="M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
