# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
require 'table_print'

Doctor.destroy_all
Patient.destroy_all
Appointment.destroy_all

10.times do
  City.create(name: Faker::Address.city, zip: Faker::Address.zip)
  puts "\nCity created"
end

4.times do |index|
  Specialty.create(name: %w[cardiology ENT physician podology][index])
  puts "\nSpecialty created"
end

cities = City.all
10.times do
  Doctor.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, city: cities.sample)
  puts "\nDoctor created"
  Patient.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, city: cities.sample)
  puts "\nPatient created"
end

doctors = Doctor.all
patients = Patient.all
specs = Specialty.all
20.times do
  Appointment.create(date: Faker::Date.in_date_period, patient: patients.sample, doctor: doctors.sample,
                     city: cities.sample)
  puts 'One appointment created'
  DoctorSpecialty.create(doctor: doctors.sample, specialty: specs.sample)
  puts 'One link between doctors and specialties created'
end
