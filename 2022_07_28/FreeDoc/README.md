# FreeDoc

In this program you will find the database schema for a Doctolib-like. Its name is "Freedoc" in which all users can find a doctor and book appointments.

Different data bases are necessary to make this program run.
-Doctors
-Patients
-Specialties
-Cities

## How to run

After cloning the repo, using rails:

You can check the database from the rails console `rails console`.
You can then inspect the tables with e.g. `tp Doctor.all`
If you would like to rebuild it, you can use the following:

```rails
rails db:drop
rails db:migrate
rails db:seed

rails console
```

Then as above to look at the different tables and all this new data.
