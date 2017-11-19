# == Schema Information
#
# Table name: ideas
#
#  id         :integer          not null, primary key
#  title      :string
#  desc_short :text
#  desc_long  :text
#  user_id    :integer
#  status     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Idea < ApplicationRecord
  include Filterable

  belongs_to :user, optional: true
  has_many :comments
  has_and_belongs_to_many :tags

  enum status: [:idea, :problem, :doing, :done]

  scope :status, -> (status) { where status: status }
  scope :tag, -> (tag) { joins(:tags).where('tags.title = ?', tag) }
  scope :title, -> (title) { where('title like ?', "%#{title}%") }
end
