# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  body       :text
#  idea_id    :integer
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  belongs_to :idea
  belongs_to :user

  def likes
    CommentLike.where(comment_id: self.id).count
  end

  def user_email
    User.find(self.user.id).email
  end

  def attributes
    super.merge({'user_email' => user_email})
  end
end
