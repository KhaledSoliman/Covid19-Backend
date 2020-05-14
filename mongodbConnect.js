const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'mydb';
const client = new MongoClient(url, { useUnifiedTopology: true } );

client.connect(function(err) {
    if(err)
        console.log(err);
    else
        console.log("Connected successfully to mongodb server");
});

const db = client.db(dbName);

// mongo.db.collection('COVID-19').insertMany([
//     {
//         question: "What is a novel coronavirus?",
//         answer: "A novel coronavirus is a new coronavirus that has not been previously identified. The virus causing coronavirus disease 2019 (COVID-19), is not the same as the coronaviruses that commonly circulate among humans and cause mild illness, like the common cold.\n" +
//             "\n" +
//             "A diagnosis with coronavirus 229E, NL63, OC43, or HKU1 is not the same as a COVID-19 diagnosis. Patients with COVID-19 will be evaluated and cared for differently than patients with common coronavirus diagnosis."
//     },
//     {
//         question: "What is the souce of the virus?",
//         answer: "COVID-19 is caused by a coronavirus called SARS-CoV-2. Coronaviruses are a large family of viruses that are common in people and may different species of animals, including camels, cattle, cats, and bats.  Rarely, animal coronaviruses can infect people and then spread between people. This occurred with MERS-CoV and SARS-CoV, and now with the virus that causes COVID-19. The SARS-CoV-2 virus is a betacoronavirus, like MERS-CoV and SARS-CoV. All three of these viruses have their origins in bats. The sequences from U.S. patients are similar to the one that China initially posted, suggesting a likely single, recent emergence of this virus from an animal reservoir. However, the exact source of this virus is unknown.",
//     },
//     {
//         question: "How does the virus spread? ",
//         answer: "The virus that causes COVID-19 is thought to spread mainly from person to person, mainly through respiratory droplets produced when an infected person coughs or sneezes. These droplets can land in the mouths or noses of people who are nearby or possibly be inhaled into the lungs. Spread is more likely when people are in close contact with one another (within about 6 feet).\n" +
//             "\n" +
//             "COVID-19 seems to be spreading easily and sustainably in the community (“community spread”) in many affected geographic areas. Community spread means people have been infected with the virus in an area, including some who are not sure how or where they became infected.",
//     },
//     {
//         question: "Why are we seeing a rise in cases?",
//         answer: "The number of cases of COVID-19 being reported in the United States is rising due to increased laboratory testing and reporting across the country. The growing number of cases in part reflects the rapid spread of COVID-19 as many U.S. states and territories experience community spread. More detailed and accurate data will allow us to better understand and track the size and scope of the outbreak and strengthen prevention and response efforts.",
//     },
//     {
//         question: "Can someone who had COVID-19 spread the illness to others?",
//         answer: "The virus that causes COVID-19 is spreading from person-to-person. People are thought to be most contagious when they are symptomatic (the sickest). That is why CDC recommends that these patients be isolated either in the hospital or at home (depending on how sick they are) until they are better and no longer pose a risk of infecting others. More recently the virus has also been detected in asymptomatic persons.\n" +
//             "\n" +
//             "How long someone is actively sick can vary so the decision on when to release someone from isolation is made using a test-based or non-test-based strategy (i.e. time since illness started and time since recovery) in consultation with state and local public health officials. The decision involves considering the specifics of each situation, including disease severity, illness signs and symptoms, and the results of laboratory testing for that patient.",
//     },
//     {
//         question: "Can I get sick with COVID-19 if it is on food?",
//         answer: "Based on information about this novel coronavirus thus far, it seems unlikely that COVID-19 can be transmitted through food – additional investigation is needed.",
//     },
//     {
//         question: "Will warm weather stop the outbreak of COVID-19?",
//         answer: "It is not yet known whether weather and temperature affect the spread of COVID-19. Some other viruses, like those that cause the common cold and flu, spread more during cold weather months but that does not mean it is impossible to become sick with these viruses during other months.  There is much more to learn about the transmissibility, severity, and other features associated with COVID-19 and investigations are ongoing.",
//     },
//     {
//         question: "What is the risk of my child being sick with COVID-19?",
//         answer: "Based on available evidence, children do not appear to be at higher risk for COVID-19 than adults. While some children and infants have been sick with COVID-19, adults make up most of the known cases to date.",
//     }
// ], function (err, r) {
//     if (err)
//         console.log(err);
//     else
//         console.log("Success");
//
// });

module.exports = {client, db};