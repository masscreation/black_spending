class CategoriesController < ApplicationController

	def index 
		@categories = Category.all
	end

	def show
		@category = Category.find(params[:id])
	end

	def new
		@category = Category.new
	end

	def create
		@category = Category.new(category_params)
		if @category.save
			redirect_to @category
		else
			render 'new'
		end
	end

	def edit
		@category = Category.find(params[:id])
	end

	def update
		if @category.update?
			redirect_to @category
		else
			render 'edit'
		end
	end

	def destroy
	end

	private

	def category_params
		params.require(:category).permit(:name, :description)
	end
end
