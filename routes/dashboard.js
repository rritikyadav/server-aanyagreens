import express from 'express';
import { Form } from '../models/form.model.js';
import  Authentication  from '../utilities/authenticate.js'

const dashboard_router = express.Router()



dashboard_router.post('/', async (req, res) => {
  const newForm = new Form(req.body)
  await newForm.save()
  console.log("Form Saved")
});

dashboard_router.get('/', Authentication, async (req, res) => {
  const data = await Form.find().sort({ createdAt: -1 })
  res.json(data)
  console.log("sent successfully")
});

dashboard_router.delete('/:id', Authentication, async (req, res) => {
  const deleted = await Form.findByIdAndDelete(req.params.id);
  res.json(deleted)
})

export default dashboard_router;