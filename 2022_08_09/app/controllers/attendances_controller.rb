class AttendancesController < ApplicationController
  before_action :authenticate_user!, only: %i[index]

  def index
    @event = Event.find(params[:event_id])
    @attendees = Attendance.where(event:@event)
    @count = Attendance.where(event:@event).count
  end

  def new
    @event = Event.find(params[:event_id])
  end

  def create
    # if payment == true
    #   redirect_to event_path(params[:id])
    # else
    #   render
    # end
  end

end
