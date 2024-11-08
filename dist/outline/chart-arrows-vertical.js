import { openBlock as e, createElementBlock as h, createStaticVNode as r } from "vue";
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
function a(l, t) {
  return e(), h("svg", o, t[0] || (t[0] = [
    r('<path d="M18 21v-14"></path><path d="M9 15l3 -3l3 3"></path><path d="M15 10l3 -3l3 3"></path><path d="M3 21l18 0"></path><path d="M12 21l0 -9"></path><path d="M3 6l3 -3l3 3"></path><path d="M6 21v-18"></path>', 7)
  ]));
}
const i = { render: a };
export {
  i as default,
  a as render
};
