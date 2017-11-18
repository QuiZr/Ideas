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

  # POST /todos/:id/like
  def like
    @idea = Idea.find(params[:idea_id])
    Like.create(idea_id: @idea.id, user_id: current_user.id)
    json_response(@idea)
  end

  # POST /todos/:id/unlike
  def unlike
    @idea = Idea.find(params[:idea_id])
    Like.where(idea_id: params[:idea_id]).where(user_id: current_user.id)
    json_response(@idea)
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
