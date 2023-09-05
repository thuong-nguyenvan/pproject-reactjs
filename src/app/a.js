var _0x41ba=["\x53\x61\x79\x48\x65\x6C\x6C\x6F","\x47\x65\x74\x43\x6F\x75\x6E\x74","\x4D\x65\x73\x73\x61\x67\x65\x20\x3A\x20","\x59\x6F\x75\x20\x61\x72\x65\x20\x77\x65\x6C\x63\x6F\x6D\x65\x2E"];function NewObject(_0xf5e0x2){var _0xf5e0x3=0;this[_0x41ba[0]]= function(_0xf5e0x4){_0xf5e0x3++;alert(_0xf5e0x2+ _0xf5e0x4)};this[_0x41ba[1]]= function(){return _0xf5e0x3}}var obj= new NewObject(_0x41ba[2]);obj.SayHello(_0x41ba[3])
function ready(t) {
  if ("loading" !== document.readyState) {
    t();
    return;
  }
  document.addEventListener("DOMContentLoaded", t);
}
!(function () {
  let t = document
      .querySelector('script[data-chat-service="Salebot"][data-bot-id]')
      .getAttribute("data-bot-id"),
    e =
      document
        .querySelector('script[data-chat-service="Salebot"][data-bubble-color]')
        ?.getAttribute("data-bubble-color") ?? "rgb(57 186 248)",
    l =
      document
        .querySelector('script[data-chat-service="Salebot"][data-chat-width]')
        ?.getAttribute("data-chat-width") ?? "450px",
    s =
      document
        .querySelector('script[data-chat-service="Salebot"][data-chat-height]')
        ?.getAttribute("data-chat-height") ?? "550px";
  ready(() => init(t, e, l, s));
})();
