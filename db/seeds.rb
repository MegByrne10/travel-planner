# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

10.times do
  start_date = Date.today + [*2..52].sample.weeks
  end_date = start_date + [*3..21].sample.days

  Trip.create(title: "#{Faker::Address.country} Trip!",
              description: Faker::Lorem.paragraph,
              start_date: start_date,
              end_date: end_date)
end