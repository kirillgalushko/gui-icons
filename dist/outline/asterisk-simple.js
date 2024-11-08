import { openBlock as e, createElementBlock as o, createStaticVNode as r } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function i(n, t) {
  return e(), o("svg", h, t[0] || (t[0] = [
    r('<path d="M12 12v-9"></path><path d="M12 12l-9 -2.5"></path><path d="M12 12l9 -2.5"></path><path d="M12 12l6 8.5"></path><path d="M12 12l-6 8.5"></path>', 5)
  ]));
}
const a = { render: i };
export {
  a as default,
  i as render
};
