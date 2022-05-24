# graphql-setup
This app demonstrates how to use GraphQL to query and mutate data and hosted on AWS.
In development mode, it uses a replica set; because of transaction issues with Prisma as the ORM a standalone server does not work. To setup the replica set, follow these steps:
1. Kill the current mongod process
On MacOS, this can be accomplished by running `killall mongod`
2. Run:
```
mongod --port 27017 --dbpath /data/db --replSet rs0 --bind_ip localhost
```

Note: Please make sure that `/data/db` exists on your file system.  
3. start a new mongo shell: `mongo` and run `rs.initiate()`

Optionally, you can use a hosted db service like MongoDB Atlas.