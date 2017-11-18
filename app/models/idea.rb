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
  belongs_to :user, optional: true
end
