class TaskController < ApplicationController
  def index
    if params[:category_id]
      @tasks = Task.where(category_id: params[:category_id]).all
    else
      @tasks = Task.all
    end
  end

  def update
    task = Task.find(task_params[:id])
    task.update(task_params)
  end

  def show
    @task = Task.find(params[:id])
  end

  def create
    task = Task.create(task_params)
    redirect_to task, turbolinks: false
  end

  private
    def task_params
      params.require(:task).permit(:title, :complete, :category_id, :id)
    end
end
