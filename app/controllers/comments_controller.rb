class CommentsController < ApplicationController
  before_action :set_ideas
  before_action :set_comment, only: [:show, :edit, :update, :destroy]

  # GET /idea/1/comments
  def index
    @comments = @idea.comments
    json_response(@comments)
  end

  def create
    @comment = @idea.comments.build(comment_params)
    @comment.save
    json_response(@comment, :created)
  end

  def show
    json_response(@comment)
  end

  def update
    @comment.update_attributes(comment_params)
    head :no_content
  end

  def destroy
    @comment.destroy
    head :no_content
  end

  private

  def comment_params
    params.permit(:body, :idea_id, :user_id)
  end

  def set_ideas
    @idea = Idea.find(params[:idea_id])
  end

  def set_comment
    @comment = @idea.comments.find(params[:id])
  end
end
