class CheckoutController < ApplicationController
  def create
    event = Event.find(params[:id])
    @session = Stripe::Checkout::Session.create(
      {
        mode: 'payment',
        success_url: root_url,
        cancel_url: root_url,
        payment_method_types: ['card'],
        line_items: [{
          quantity: 1,
          price_data: {
            currency: 'usd',
            unit_amount: event.price,
            product_data: {
              name: event.title
            }
          }
        }]
      }
    )
    respond_to do |format|
      format.js
    end
  end
end
