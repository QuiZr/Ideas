class TechnologiesController < ApplicationController
  before_action :set_technology, only: [:show, :update, :destroy]
  before_action :authenticate_user!

  # GET /technologies
  def index
    @technologies = Technology.all
    json_response(@technologies)
  end

  # POST /technology
  def create
    @technology = Technology.create!(technology_params)
    json_response(@technology, :created)
  end

  # GET /technology/:id
  def show
    json_response(@technology)
  end

  # PUT /technology/:id
  def update
    @technology.update(idea_params)
    head :no_content
  end

  # DELETE /technology/:id
  def destroy
    @technology.destroy
    head :no_content
  end

  private

  def technology_params
    # whitelist params
    params.permit(:title)
  end

  def set_technology
    @technology = Technology.find(params[:id])
  end
end
