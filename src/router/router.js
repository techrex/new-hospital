import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import RegisterSuccess from '@/views/RegisterSuccess.vue'
import Hospitals from '@/views/Hospitals.vue'
import DoctorTypes from '@/views/DoctorTypes.vue'
import Doctors from '@/views/Doctors.vue'
import Doctor from '@/views/Doctor.vue'
import Hospital from '@/views/Hospital.vue'
import Drugs from '@/views/Drugs.vue'
import Drug from '@/views/Drug.vue'
import Appointments from '@/views/Appointments.vue'
import Appointment from '@/views/Appointment.vue'
import AppointmentForm from '@/views/AppointmentForm.vue'
import AppointmentSuccess from '@/views/AppointmentSuccess.vue'
import Test from '@/views/Test.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/registerSuccess',
      name: 'RegisterSuccess',
      component: RegisterSuccess
    },
    {
      path: '/doctorTypes',
      name: 'DoctorTypes',
      component: DoctorTypes
    },
    {
      path: '/doctors/:doctorType',
      name: 'Doctors',
      component: Doctors
    },
    {
      path: '/doctor/:doctorId',
      name: 'Doctor',
      component: Doctor
    },
    {
      path: '/hospitals',
      name: 'Hospitals',
      component: Hospitals
    },
    {
      path: '/hospital/:hospitalId',
      name: 'Hospital',
      component: Hospital
    },
    {
      path: '/drugs',
      name: 'Drugs',
      component: Drugs
    },
    {
      path: '/drug/:drugId',
      name: 'Drug',
      component: Drug
    },
    {
      path: '/appointments',
      name: 'Appointments',
      component: Appointments
    },
    {
      path: '/appointment/:appointmentId',
      name: 'Appointment',
      component: Appointment
    },
    {
      path: '/appointmentForm/:appointmentType/:hospital/:id',
      name: 'AppointmentForm',
      component: AppointmentForm
    },
    {
      path: '/appointmentSuccess',
      name: 'AppointmentSuccess',
      component: AppointmentSuccess
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '*',
      redirect: { name: 'Index' }
    }
    // component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})

export default router
