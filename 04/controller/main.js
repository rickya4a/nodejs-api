const pool = require('../db/connection')
const _ = require('lodash')
const reverse = require('../../01/reverseString')
const fibonacci = require('../../02/fibonacci')
const combination = require('../../03/combination')

/**
 * Fetch all employees
 *
 * @param   {any}  res  http response
 *
 * @return  {void}       employees data
 */
exports.getEmployees = (_, res) => {
  pool.query(`SELECT * FROM employees`, (err, results) => {
    if (err) throw err

    res.status(200).json({
      status: true,
      data: results
    })

    pool.end()
  })
}

/**
 * Get specific employee by id
 *
 * @param   {any}  req  http request
 * @param   {any}  res  http response
 *
 * @return  {void}      get employee
 */
exports.getSpecEmployees = (req, res) => {
  pool.query(`SELECT * FROM employees WHERE id = ?`, [req.params.id],
    (err, result) => {
      if (err) throw err

      res.status(200).json({
        status: true,
        data: result[0]
      })

    pool.end()
  })
}

/**
 * Insert new employee
 *
 * @param   {any}  req  http request
 * @param   {any}  res  http response
 *
 * @return  {void}      get inserted new employee data
 */
exports.addEmployee = (req, res) => {

  // Check if request body is fulfilled
  if (Object.keys(req.body).length < 3
  && req.body.constructor === Object)
    return res.status(400).json({
      status: false,
      message: 'body fields are required'
    })

  // Get data body
  let { name, phone_number, jobtitle } = req.body

  pool.query(`INSERT INTO employees
    (name, phone_number, jobtitle)
    VALUES (?, ?, ?)`,
    [name, phone_number, jobtitle], (err, _) => {
      if (err) throw err

      res.status(201).json({
        status: true,
        data: { name, phone_number, jobtitle }
      })

    pool.end()
  })
}

/**
 * Edit existing employee
 *
 * @param   {any}  req  http request
 * @param   {any}  res  http response
 *
 * @return  {void}      get edited employee data
 */
exports.editEmployee = (req, res) => {

  // Check if request body is fulfilled
  if (Object.keys(req.body).length < 3
  && req.body.constructor === Object)
    return res.status(400).json({
      status: false,
      message: 'body fields are required'
    })

  // Get data body
  let { name, phone_number, jobtitle } = req.body

  pool.query(`UPDATE employees
    SET name = ?, phone_number = ?, jobtitle = ?
    WHERE id = ?`,
    [name, phone_number, jobtitle, req.params.id], (err, _) => {
      if (err) throw err

      res.status(201).json({
        status: true,
        data: { name, phone_number, jobtitle }
      })

    pool.end()
  })
}

/**
 * Delete employee by id
 *
 * @param   {any}  req  http request
 * @param   {any}  res  http response
 *
 * @return  {void}
 */
exports.deleteEmployee = (req, res) => {
  pool.query(`DELETE FROM employees WHERE id = ?`, [parseInt(req.params.id)],
    (err, _) => {
      if (err) throw err

      res.status(204).json({
        status: true
      })

    pool.end()
  })
}

exports.reverseString = (req, res) => {
  // Check if request body is fulfilled
  if (Object.keys(req.body).length === 0
  && req.body.constructor === Object)
    return res.status(400).json({
      status: false,
      message: 'body fields are required'
    })

  let { character } = req.body

  res.status(200).json({
    result: reverse(character)
  })
}

exports.fibonacci = (req, res) => {
  // Check if request body is fulfilled
  if (Object.keys(req.body).length === 0
  && req.body.constructor === Object)
    return res.status(400).json({
      status: false,
      message: 'body fields are required'
    })

  let { n } = req.body

  res.status(200).json({
    result: fibonacci(n)
  })
}

exports.combination = (req, res) => {
  // Check if request body is fulfilled
  if (Object.keys(req.body).length === 0
  && req.body.constructor === Object)
    return res.status(400).json({
      status: false,
      message: 'body fields are required'
    })

  let { n, r } = req.body

  res.status(200).json({
    result: `${combination(n, r)}`
  })
}