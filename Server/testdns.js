const dns = require("dns");

dns.setServers([
  "8.8.8.8",
  "8.8.4.4"
]);

dns.resolveSrv(
  "_mongodb._tcp.auraweardb.gx07law.mongodb.net",
  (err, addresses) => {
    if (err) {
      console.error("DNS Error:", err);
    } else {
      console.log("SUCCESS");
      console.log(addresses);
    }
  }
);