Before starting change the name of the Server in the file appsettings.json

"ConnectionStrings": {
    "DefaultConecction": "Server=DESKTOP-C4RLIN6\\SQLEXPRESS;Database=CastroFormData;Trusted_Connection=true;MultipleActiveResultSets=true"
  }


change "Server=DESKTOP-C4RLIN6\\SQLEXPRESS" to your server name "Server=SomeName"

After that in "Package Manager Console" excecute command add-migration nameMigration
then run the command update-database

To load the city data into the created database, run the file "CastroFormDataGenerator.sql"