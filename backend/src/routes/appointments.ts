import { parseISO, startOfHour } from 'date-fns'
import { Router } from 'express'

import AppointmentsRepository from '../respositories/Appointments'
import CreateAppointment from '../services/CreateAppointment'

const appointmentsRouter = Router()
const appointmentsRepository = new AppointmentsRepository()

appointmentsRouter.get('/', (req, res) => {
  const appointments = appointmentsRepository.getAll()
  return res.json(appointments)
})

appointmentsRouter.post('/', (req, res) => {
  try {
    const { provider, date } = req.body
    const parsedDate = parseISO(date)
    const createAppointment = new CreateAppointment(appointmentsRepository)
    const appointment = createAppointment.execute({ date: parsedDate, provider })

    return res.json(appointment)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
})

export default appointmentsRouter
