import { openBlock as e, createElementBlock as h, createStaticVNode as o } from "vue";
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
function n(a, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M12 8.04v-5.04"></path><path d="M15.5 10l4.5 -2.5"></path><path d="M15.5 14l4.5 2.5"></path><path d="M12 15.96v5.04"></path><path d="M8.5 14l-4.5 2.5"></path><path d="M8.5 10l-4.5 -2.505"></path>', 6)
  ]));
}
const i = { render: n };
export {
  i as default,
  n as render
};
