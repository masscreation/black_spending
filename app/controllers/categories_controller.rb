class CategoriesController < ApplicationController

	def index 
	 	render :json => Category.all
	end

	def show
		render :json => Category.find(params[:id])
	end

	def create
		respond_with Category.create(category_params)
	end

	def update
	end

	def destroy
	end

	private

	def category_params
		params.require(:category).permit(:name, :description)
	end
end
