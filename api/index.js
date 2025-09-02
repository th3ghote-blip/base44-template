// api/index.js
module.exports = (req, res) => {
  res.status(200).json({
    ok: true,
    route: '/api',
    method: req.method,
    time: new Date().toISOString(),
  });
};
