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
function n(i, t) {
  return e(), o("svg", h, t[0] || (t[0] = [
    r('<path d="M12 12l8 -4.5"></path><path d="M12 12v9"></path><path d="M12 12l-8 -4.5"></path><path d="M12 12l8 4.5"></path><path d="M12 3v9"></path><path d="M12 12l-8 4.5"></path>', 6)
  ]));
}
const l = { render: n };
export {
  l as default,
  n as render
};
