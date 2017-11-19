require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get most_active" do
    get users_most_active_url
    assert_response :success
  end

end
