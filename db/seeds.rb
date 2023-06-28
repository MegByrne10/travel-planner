# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.create(email: 'megan@example.com', password: 'password123', first_name: 'Megan', last_name: 'Byrne')
User.create(email: 'sam@test.com', password: 'password123', first_name: 'Sam', last_name: 'Testperson')

10.times do
  user = User.find_by(email: 'megan@example.com')
  start_date = Date.today + [*2..52].sample.weeks
  end_date = start_date + [*3..21].sample.days

  Trip.create(user: user,
              title: "#{Faker::Address.country} Trip!",
              description: Faker::Lorem.paragraph,
              start_date: start_date,
              end_date: end_date)
end

5.times do
  user = User.find_by(email: 'sam@test.com')
  start_date = Date.today + [*2..52].sample.weeks
  end_date = start_date + [*3..21].sample.days

  Trip.create(user: user,
              title: "#{Faker::Address.country} Trip!",
              description: Faker::Lorem.paragraph,
              start_date: start_date,
              end_date: end_date)
end