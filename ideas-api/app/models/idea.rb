class Idea < ApplicationRecord
  belongs_to :user, optional: true
end
