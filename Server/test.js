const dns = require("dns");

dns.resolveSrv(
  "_mongodb._tcp.auraweardb.gx07law.mongodb.net",
  (err, addresses) => {
    console.log("Error:", err);
    console.log("Addresses:", addresses);
  }
);