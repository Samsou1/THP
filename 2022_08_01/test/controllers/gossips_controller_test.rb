require 'test_helper'

class GossipsControllerTest < ActionDispatch::IntegrationTest
  test "should get display" do
    get gossips_display_url
    assert_response :success
  end

  test "should get show_author" do
    get gossips_show_author_url
    assert_response :success
  end

end
