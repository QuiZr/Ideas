class UsersController < ApplicationController
  def index
    @users = User.filter(params.slice(:address))
    json_response(@users)
  end

  def show
    @user = User.find(params[:id])
    json_response(@user)
  end
end
