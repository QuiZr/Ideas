# == Schema Information
#
# Table name: comment_likes
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  comment_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class CommentLike < ApplicationRecord
  belongs_to :user
  belongs_to :comment
end
