# Br8ghter

The app can be found deployed on [https://br8ghter.herokuapp.com](https://br8ghter.herokuapp.com).

## Gemfile versions

- ruby 2.7.6
- rails 5.2.8.1

This program is used to create a website that allows people to create events and take part in others'.

## MVC Architecture

The `Router` gets the URL typed by the user and call the right `controller`.
The `Controller` will ask the different databases (here `Events`, `Attendances` and `User`) for data and then calls the right `View` so the data the user wants to see can be displayed.

### How to run this program

```ruby
rails db:drop ==> if this is not the first time running this program
rails db:create
rails db:migrate
rails db:seed

rails server
```

Then open a browser to [http://localhost:3000](http://localhost:3000/) to start using the program.
You will then be able to sign up, log in, edit your profile, post new events, have a look at other events...
