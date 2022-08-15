const { MongoClient, ServerApiVersion } = require('mongodb');

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid Input' });
      return;
    }
    const newMessage = {
      email,
      name,
      message,
    };

    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3q3c1.mongodb.net/my-site?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    });
    try {
      await client.connect();
    } catch (error) {
      res.status(500).json({ message: 'could not connect to database' });
      return;
    }
    const db = client.db();
    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Storing message failed' });
      return;
    }
    client.close();
    res
      .status(201)
      .json({ message: 'Successfully stored message', message: newMessage });
  }
};

export default handler;
