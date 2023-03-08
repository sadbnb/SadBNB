class ApartmentsController < ApplicationController

    def index
        apartments = Apartment.all
		render json: apartments, status: 200
	end

    def show
        apartment = Apartment.find_by(id: params[:id])
        if (apartment)
            render json: apartment
        else
            render json: apartment.errors.full_messages, status: 422
        end
    end

end
