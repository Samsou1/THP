class EmailsController < ApplicationController

  def index
    @emails = Email.all
  end

  def show
    
    @email = Email.find([params[:id]])[0]
    @email.update(read: true)
    
    respond_to do |format|
      format.js { }
      format.html { redirect_to root_path }
      break
    end
  end

  def update
    @email = Email.find([params[:id]])[0]
    @email.update(read: false)
    respond_to do |format|
      format.js { }
      format.html { redirect_to root_path }
      break
    end
  end

  def create
    @email = Email.create(object: Faker::Book.title, body: Faker::Movie.quote, read:false)
    puts "$" * 50
    puts @email
    puts "$" * 50
    respond_to do |format|
      format.html { redirect_to emails_path }
      format.js { }
    end
  end

  def destroy
    puts "$"*30
    puts params
    puts "$"*30
    @email = Email.find(params[:id])
    @email.destroy
    respond_to do |format|
      format.html { redirect_to emails_path }
      format.js { }
    end
  end
end
