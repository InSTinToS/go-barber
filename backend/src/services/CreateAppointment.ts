import { startOfHour } from 'date-fns'
import Appointment from '../models/Appointment'
import AppointmentsRepository from '../respositories/Appointments'

interface Execute {
  provider: string
  date: Date
}

class CreateAppointment {
  private appointmentsRepository: AppointmentsRepository

  constructor(appointmentsRepository: AppointmentsRepository) {
    this.appointmentsRepository = appointmentsRepository
  }

  public execute(data: Execute): Appointment {
    const { provider, date } = data
    const appointmentDate = startOfHour(date)

    if (this.appointmentsRepository.findByDate(appointmentDate))
      throw Error('This appointment is already booked')

    const appointment = this.appointmentsRepository.create({ provider, date: appointmentDate })

    return appointment
  }
}

export default CreateAppointment
