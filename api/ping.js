// api/ping.js
module.exports = (req, res) => {
  res.status(200).json({ ok: true, route: '/api/ping', time: new Date().toISOString() });
};
