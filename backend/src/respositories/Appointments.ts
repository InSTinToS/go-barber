import { isEqual } from 'date-fns'
import Appointment from '../models/Appointment'

interface AppointmentCreate {
  provider: string
  date: Date
}

class AppointmentsRepository {
  private appointments: Appointment[]

  constructor() {
    this.appointments = []
  }

  public getAll(): Appointment[] {
    return this.appointments
  }

  public create(data: AppointmentCreate): Appointment {
    const appointment = new Appointment(data)
    this.appointments.push(appointment)
    return appointment
  }

  public findByDate(date: Date): Appointment | null {
    const foundAppointment = this.appointments.find(appointment => isEqual(date, appointment.date))
    return foundAppointment || null
  }
}

export default AppointmentsRepository
