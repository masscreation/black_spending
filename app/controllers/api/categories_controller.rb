class Api::CategoriesController < ApplicationController

	def index 
	 	respond_with :api, categories
	end

	def show
		respond_with :api, category
	end

	def create
		respond_with Category.create(category_params)
	end

	def destroy
		respond_with :api, category.destroy
	end

	private

		def categories
	    	@categories ||= Category.all
	  	end

		def category
		    @category ||= categories.find(params[:id])
		end

		def category_params
			params.require(:category).permit(:name, :description)
		end
end
