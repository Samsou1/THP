# README

## How to run

```
rails s
```

## How to sign up/log in

### In the rails console

Register:
```
curl -XPOST -H "Content-Type: application/json" -d '{ "user": { "email": "example@example.com", "password": "12345678" } }' http://localhost:3000/users
```

Log in:
```
curl -XPOST -i -H "Content-Type: application/json" -d '{ "user": { "email": "example@example.com", "password": "12345678" } }' http://localhost:3000/users/sign_in
```
Access your data:
```
curl -XGET -H [your token] -H "Content-Type: application/json" http://localhost:3000/member-data
```

Log out 
```
curl -XDELETE -H "Authorization: [your token]" -H "Content-Type: application/json" http://localhost:3000/users/sign_out
```


### On Insomnia/postman


## How to access articles

