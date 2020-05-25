import kafka from "kafka-node";

let kafkaConnect = (io,ee) => {
  let topic = 'messenger';
  //let topic = 'topic';
  let client = new kafka.KafkaClient('localhost:9092');
  //let client = new kafka.KafkaClient({kafkaHost: '10.69.93.105:9092'});
  let topicSet = [{ topic: topic }];
  let consumer = new kafka.Consumer(client, topicSet);

  consumer = consumer.on('message', (data)=>{
    //console.log(data.value);
    ee.emit("aggregator-message", data.value);
  });
}

module.exports = kafkaConnect;