class IdeasController < ApplicationController
  before_action :set_idea, only: [:show, :update, :destroy]
  before_action :authenticate_user!

  # GET /ideas
  def index
    @ideas = Idea.all
    json_response(@ideas)
  end

  # POST /todos
  def create
    @idea = Idea.create!(idea_params)
    json_response(@idea, :created)
  end

  # GET /todos/:id
  def show
    json_response(@idea)
  end

  # PUT /todos/:id
  def update
    @idea.update(idea_params)
    head :no_content
  end

  # DELETE /todos/:id
  def destroy
    @idea.destroy
    head :no_content
  end

  private

  def idea_params
    # whitelist params
    params.permit(:title, :desc_short, :desc_long, :status, :user_id)
  end

  def set_idea
    @idea = Idea.find(params[:id])
  end
end
