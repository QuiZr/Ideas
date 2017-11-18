class TagsController < ApplicationController
  before_action :set_tag, only: [:show, :update, :destroy]
  before_action :authenticate_user!

  # GET /ideas
  def index
    @tags = Tag.all
    json_response(@tags)
  end

  # POST /todos
  def create
    @tag = Tag.create!(tag_params)
    json_response(@tag, :created)
  end

  # GET /todos/:id
  def show
    json_response(@tag)
  end

  # PUT /todos/:id
  def update
    @tag.update(idea_params)
    head :no_content
  end

  # DELETE /todos/:id
  def destroy
    @tag.destroy
    head :no_content
  end

  private

  def tag_params
    # whitelist params
    params.permit(:title)
  end

  def set_tag
    @tag = Tag.find(params[:id])
  end
end
