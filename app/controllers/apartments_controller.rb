class ApartmentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable

    def index
		render json: Apartment.all, status: 200
	end

    def show
        apartment = Apartment.find_by(id: params[:id])
        render json: apartment, status: 200
    end


    def create
        apartment = Apartment.create!(apartment_params)
        render json: apartment, status: :ok
    end

    def destroy
        apartment = Apartment.find_by!(id: params[:id])
        apartment.destroy
        head :no_content
    end

    def update
        apartment = Apartment.find_by!(id: params[:id])
        render json: apartment, status: :ok
    end

    private
    def apartment_params 
        params.permit(:apartment_id, :user_id)
    end

    def render_not_found
        render json: {error: "apartment not found"}, status: :not_found
    end

    def render_unprocessable(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

end
