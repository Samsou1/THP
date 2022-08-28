require 'test_helper'

class GreetControllerTest < ActionDispatch::IntegrationTest
  test "should get welcome" do
    get greet_welcome_url
    assert_response :success
  end

end
