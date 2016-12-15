class CategoryController < ApplicationController
  def index
    @categories = Category.all
  end

  def show
    @category = Category.find(params[:id])
  end

  def create
    category = Category.create(category_params)
    redirect_to category, turbolinks: false
  end

  private
    def category_params
      params.require(:category).permit(:title, :id)
    end
end
