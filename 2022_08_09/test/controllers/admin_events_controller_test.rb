require 'test_helper'

class AdminEventsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get admin_events_index_url
    assert_response :success
  end

  test "should get edit" do
    get admin_events_edit_url
    assert_response :success
  end

  test "should get show" do
    get admin_events_show_url
    assert_response :success
  end

  test "should get update" do
    get admin_events_update_url
    assert_response :success
  end

  test "should get destroy" do
    get admin_events_destroy_url
    assert_response :success
  end

end
