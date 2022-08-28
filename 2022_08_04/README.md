# Thirty Miles Project

![OMG](./public/TMP.png)

## Gemfile versions

- ruby 2.7.4
- rails 5.2.8.1

This program is used to simulate a gossip blog in which people can post new gossips.

## MVC Architecture

The `Router` gets the URL typed by the user and call the right `controller`.
The `Controller` will ask the different databases (here `Gossip` and `User`) for data and then calls the right `View` so the data the user wants to see can be displayed.

### How to run this program

```ruby
rails db:create
rails db:migrate
rails db:seed

rails server
```

 Then open a browser to [http://localhost:3000](http://localhost:3000/) to start using the program.
