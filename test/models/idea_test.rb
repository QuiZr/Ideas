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

require 'test_helper'

class IdeaTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
