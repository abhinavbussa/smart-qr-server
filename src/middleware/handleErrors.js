/** Handle errors middleware
 * @param  {object} err
 * @param  {object} req
 * @param  {object} res
 * @return {object} res
 */
const handleErrors = (err, req, res) => {
  // eslint-disable-next-line no-console
  console.log(err.stack || err)
  return res
    .status(err.status || 500)
    .json({ status: err.status || 500, message: err.message })
}

module.exports = handleErrors
