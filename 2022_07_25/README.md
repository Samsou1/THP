# TMP
!['OMG amazeballs!!!'](./lib/public/img/TMP.png)

This app was created by [Pefington](https://github.com/Pefington) and [Samsou1](https://github.com/Samsou1) on Github for academic purposes only

## What does it do? I hear you ask

It allows you to watch gossips, post new ones, edit them and add comments on each gossip

## How does it work?

First launch the program `$ shotgun -p 4567` , it will open a browser tab with the url "http://localhost:4567" where you can see all the current gosips.
You can then click on any of the comments to open a new tab in which you will see the gossip you were looking for in addition to all the comments relative to this gossip. You can add a new comment by clicking on "add a new comment".
You can also post a new gossip by going back to the main page and by using the "post a new gossip" link. You can also edit it if needed.

## Architecture of the program

At the root of the program you can find **config.ru** that will load the right path through the different files and start the application.

In lib you can find **controller.rb** that will get the path you give to the program and it will call the right method(s).
You will also find **gossip.rb** that creates the Gossip class. This class allows to create, save and show all of the gossips.
Finally there is **comment.rb** that will create the Comment class. Just like the Gossip class, this file will allow you to create comments, save them and see them.
I
