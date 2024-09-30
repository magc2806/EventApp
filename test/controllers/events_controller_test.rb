require "test_helper"
require "debug"

class EventsControllerTest < ActionDispatch::IntegrationTest
  fixtures :users, :events

  setup do
    @user = users(:one) # Load user fixture
    #sign_in @user # Assuming Devise helper is available to log in the user
    @event = events(:one) # Load event fixture
    #@event.update!(organizer: @user) # Explicitly assign user as the organizer
  end

  test "should get index" do
    get events_url
    assert_response :success
  end

  test "should get new" do
    get new_event_url
    assert_response :success
  end

  test "should create event" do
    assert_difference("Event.count") do
      post events_url, params: { event: { archive: @event.archive, description: @event.description, event_date: @event.event_date, name: @event.name, public: @event.public, user_id: @event.user_id } }
    end

    assert_redirected_to event_url(Event.last)
  end

  test "should show event" do
    get event_url(@event)
    assert_response :success
  end

  test "should get edit" do
    get edit_event_url(@event)
    assert_response :success
  end

  test "should update event" do
    patch event_url(@event), params: { event: { archive: @event.archive, description: @event.description, event_date: @event.event_date, name: @event.name, public: @event.public, user_id: @event.user_id } }
    assert_redirected_to event_url(@event)
  end

  test "should destroy event" do
    assert_difference("Event.count", -1) do
      delete event_url(@event)
    end

    assert_redirected_to events_url
  end
end