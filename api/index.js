// api/index.js
module.exports = (req, res) => {
  res.status(200).json({
    ok: true,
    path: req.url,
    method: req.method,
    time: new Date().toISOString(),
  });
};
[object Object]
