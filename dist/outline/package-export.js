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
    o('<path d="M12 21l-8 -4.5v-9l8 -4.5l8 4.5v4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12v9"></path><path d="M12 12l-8 -4.5"></path><path d="M15 18h7"></path><path d="M19 15l3 3l-3 3"></path>', 6)
  ]));
}
const i = { render: n };
export {
  i as default,
  n as render
};
