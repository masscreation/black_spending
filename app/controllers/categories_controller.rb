class CategoriesController < ApplicationController

	def index 
		respond_with = Category.all
	end

	def show
		respond_with Category.find(params[:id])
	end

	def create
		@category = Category.create(category_params)
		if @category.save
			respond_to do |format|
				format.json { render @category.json}
			end
		else
			respond_with @category.errors
		end
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
