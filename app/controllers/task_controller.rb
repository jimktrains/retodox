class TaskController < ApplicationController
  def index
    @tasks = Task.all
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
      params.require(:task).permit(:title, :complete, :id)
    end
end
