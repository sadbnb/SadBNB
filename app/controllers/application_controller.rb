class ApplicationController < ActionController::API
  include ActionController::Cookies
  SECRET_KEY ='s@ds$b@ur@d0rit0'

  def authenticate
    # byebug
    decoded_token = JWT.decode(request.headers['Authorization'], SECRET_KEY, true, { algorithm: 'HS256' })
    user = User.find(decoded_token[0]['user_id'])
    if user
      @current_user = user
    else
      raise 'SECURITY ALERT!'
    end
  end
end
