class BookingsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable

    def index
        render json: Booking.all
    end

    def show
        booking = Booking.find_by!(id: params[:id])
        render json: booking
    end

    def create
        booking = Booking.create!(booking_params)
        render json: booking, status: :created
    end

    def destroy
        booking = Booking.find_by(id: params[:id])
        booking.destroy
        head :no_content
    end

    def update
        booking = Booking.find_by(id: params[:id])
        booking.update!(booking_params)
        render json: booking, status: :accepted
    end

    private
    def booking_params 
        params.permit(:apartment_id, :user_id, :start_date, :end_date)
    end

    def render_not_found
        render json: {error: "booking not found"}, status: :not_found
    end

    def render_unprocessable(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

end
