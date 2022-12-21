class ArticlesController < ApplicationController
  before_action :set_article, only: %i[ show update destroy ]
  before_action :authenticate_user!, only: %i[create update destroy]

  # GET /articles
  def index
    @articles = Article.all

    render json: @articles
  end

  # GET /articles/1
  def show
    if @article
      render json: @article
    else
      render json: {message: "Error, it's not your article"}, status: :unprocessable_entity
    end
  end

  # POST /articles
  def create
    @article = Article.new(article_params)
    if current_user
      @article.user_id = current_user.id
    end
    if @article.save
      render json: @article, status: :created, location: @article
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /articles/1
  def update
    if @article.update(article_params)
      render json: @article
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  # DELETE /articles/1
  def destroy
    if @article
      @article.destroy
      render json: {message: "The article was successfully deleted"}, status: :ok
    else
      render json: {message: "Error, it's not your article, you can't delete it"}, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_article
      @article = Article.find(params[:id])
      if current_user.id != @article.user_id
        @article = nil
      end
    end

    # Only allow a list of trusted parameters through.
    def article_params
      params.require(:article).permit(:title, :content, :user_id)
    end
end
