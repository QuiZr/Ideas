# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

5.times do |i|
  User.create(email: "admin#{i}@example.com", password: "12345678", password_confirmation: "12345678", nickname: "Admin#{i}")
end

10.times do |i|
  Tag.create(title: Faker::Lorem.word)
end

10.times do |i|
  Technology.create(title: Faker::Lorem.word)
end

5.times do |i|
  @idea = Idea.create(title: Faker::Book.title, desc_short: Faker::Lorem.sentence, desc_long: Faker::Lorem.paragraph, user_id: i+1, status: 0)
  10.times do
    Comment.create(idea_id: @idea.id, body: Faker::Lorem.sentence, user_id: Faker::Number.between(User.first.id, User.last.id))
  end
  3.times do
    @idea.tags << Tag.find(Faker::Number.between(Tag.first.id, Tag.last.id))
  end
end

20.times do
  @idea = Idea.create(title: Faker::Book.title,
              desc_short: Faker::Lorem.sentence,
              desc_long: Faker::Lorem.paragraph,
              user_id: Faker::Number.between(User.first.id, User.last.id),
              status: Faker::Number.between(0,3)
  )
  3.times do
    @idea.tags << Tag.find(Faker::Number.between(Tag.first.id, Tag.last.id))
  end
end

User.create(email: "jan@example.com", password: "12345678", password_confirmation: "12345678", nickname: "Jan Kowalski")
@idea = Idea.create(title: 'Tinder dla muzyków',
            desc_short: 'Aplikacja, która umożliwiła by odnajdywanie zespołów przez solowych muzyków',
            desc_long: 'Chcialbym wprowadzić rozwiązanie, które pozwoliło by aby muzycy, którzy aktualnie nie grają w żadnym zespole mogli odnajdywać innych muzyków oraz zespoły, do wspólnego granaia.',
            user_id: User.last.id,
            status: 1

)

@idea.tags << Tag.create(title: 'muzyka')
@idea.tags << Tag.create(title: 'mobile')
@idea.tags << Tag.create(title: 'web')

Comment.create(idea_id: @idea.id,
               body: 'Też o tym myślałem!',
               user_id: Faker::Number.between(User.first.id, User.last.id-1))

Comment.create(idea_id: @idea.id,
               body: 'Myślę, że pomysł powinien być bardziej szczegółowo opisany.',
               user_id: Faker::Number.between(User.first.id, User.last.id-1))

Comment.create(idea_id: @idea.id,
               body: 'Mógłbym się zająć stroną designu tego projektu',
               user_id: Faker::Number.between(User.first.id, User.last.id-1))

Comment.create(idea_id: @idea.id,
               body: 'Jestem jak najbardziej za!',
               user_id: Faker::Number.between(User.first.id, User.last.id-1))
