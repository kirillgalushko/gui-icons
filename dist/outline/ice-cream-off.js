import { openBlock as e, createElementBlock as o, createStaticVNode as h } from "vue";
const r = {
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
function n(i, t) {
  return e(), o("svg", r, t[0] || (t[0] = [
    h('<path d="M12 21.5v-4.5"></path><path d="M8 8v9h8v-1m0 -4v-5a4 4 0 0 0 -7.277 -2.294"></path><path d="M8 10.5l1.74 -.76m2.79 -1.222l3.47 -1.518"></path><path d="M8 14.5l4.488 -1.964"></path><path d="M3 3l18 18"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
