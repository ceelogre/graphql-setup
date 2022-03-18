import { DynamoDBClient, ListTablesCommand, PutItemCommand, GetItemCommand } from "@aws-sdk/client-dynamodb";


(async () => {
  const client = new DynamoDBClient({
    region: "us-east-1",
  })
  const command = new ListTablesCommand({})
  try {
    const results = await client.send(command)
    console.info(results.TableNames.join(","))
  } catch (err) {
    console.error(err)
  }
})()

const createUser = async (name) => {
  const client = new DynamoDBClient({
    region: 'us-east-1',
  })
  const command = new PutItemCommand({
    TableName: "user",
    Item: {
      name : {
        S: name
      }
    }
  })
  try {
    const results = await client.send(command)
    console.info('Saved ', results)
    return name
  } catch (err) {
    console.error('Failed to save ', err)
    return err
  }
}

const getUsers = async () => {
  const client = new DynamoDBClient({
    region: 'us-east-1'
  })
  const params = {
    TableName: "user",
    Key: {
      name: {
        N : "1"
      }
    }
  }
  const command = new GetItemCommand(params)
  try {
    const results = await client.send(command)
    console.info('Users ', results)
  } catch (err) {
    console.error('Failed to get users ', err)
    return 'Failed to get users'
  }
}
export { createUser, getUsers}