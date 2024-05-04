const { MongoClient, ServerApiVersion } = require('mongodb');
const OpenAI = require('openai');

// Replace the uri string with your connection string.
const mangodb_uri = process.env.mangodb_uri;

const client = new MongoClient(mangodb_uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  const openai = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
  });
  
  async function main() {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: 'Say this is a test' }],
      model: 'gpt-3.5-turbo',
    });
  }

async function run() {
  try {
    const database = client.db('notesgpt');
    const notes = database.collection('notes');

      /*
   *  *** INSERT DOCUMENTS ***
   *
   * You can insert individual documents using collection.insert().
   * In this example, we're going to create four documents and then
   * insert them all in one call with collection.insertMany().
   */

    const noteToSend = [
        {
          time: Date.now(),
          content: "Inserted into db",
        },
      ];
    
      try {
        const insertManyResult = await notes.insertMany(noteToSend);
        console.log(`${insertManyResult.insertedCount} documents successfully inserted.\n`);
      } catch (err) {
        console.error(`Something went wrong trying to insert the new documents: ${err}\n`);
      }

    // Query all notes in DB
    const findNotesInDb = await notes.find();
    const notesInDb = await findNotesInDb.toArray();

    console.log(notesInDb);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

    main();
    run().catch(console.dir);