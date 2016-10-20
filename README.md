# webrtc-hide-local-address extension

(Hide local IP addresses from content using WebRTC in Firefox)[https://addons.mozilla.org/en-US/developers/addon/webrtc-hide-local-address/]

This causes Firefox to expose IP addresses in [Mode 3](https://tools.ietf.org/html/draft-ietf-rtcweb-ip-handling-01#section-4).

This is useful if you wish to prevent websites from learning your local IP addresses
when you're behind a NAT. It also prevents the use of interfaces other than your
default. Using this could make some WebRTC calls slower and it could prevent WebRTC
calls from working over your local network.
