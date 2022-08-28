class EventsController < ApplicationController
  # before_action :authenticate_user!, only: %i[new show create edit update]
  after_action :attend_new_event, only: [:create]

  def index
    @events = Event.all
  end

  def edit
    @event = Event.find(params[:id])
  end

  def update
    @event = Event.find(params[:id])
    if @event.update(
      description: params[:description],
      start_date: params[:start_date],
      duration: params[:duration],
      location: params[:location],
      price: params[:price]
    )
      flash[:success] = 'You have successfully updated your event'
      redirect_to event_path(@event.id)
    else
      @event.errors.full_messages.each { |m| flash.now[:alert] = m }
      render edit_event_path(@event.id)
    end
  end

  def show
    @event = Event.find(params[:id])
    @count = Attendance.where(event_id: @event.id).count
    @attendance_possible = true
    @attendance_possible = false if Attendance.where(event_id:@event.id, user_id: current_user.id).count == 1
  end

  def new
    @event = Event.new
  end

  def create
    @event = Event.new(
      title: params[:event_title],
      description: params[:event_description],
      start_date: params[:event_start_date],
      duration: params[:event_duration],
      location: params[:event_location],
      price: params[:event_price],
      event_picture: params[:event_picture]
    )
    @event.admin = current_user
    if @event.save
      flash[:success] = 'You have successfully created a new event'
      redirect_to event_path(Event.last.id)
    else
      @event.errors.full_messages.each { |m| flash.now[:alert] = m }
      render new_event_path
    end
  end

  def destroy
    @event = Event.find_by_id(params[:id])
    @event.destroy
    flash[:success] = 'The gossip was destroyed'
    redirect_to events_path
  end

  private

  def attend_new_event
    @last_event = Event.last
    Attendance.create(event_id: @last_event.id, user_id: current_user.id)
  end

  # def authenticate_user!
  #   if current_user.admin
  #     flash[:success] = 'You are admin.'
  #     redirect_to admin_event_url
  #     redirect_to event_url
  #   else
  #     flash[:alert] = 'You need to be an admin to access this page.'
  #     redirect_to new_user_session_path
  #   end
  # end
end
