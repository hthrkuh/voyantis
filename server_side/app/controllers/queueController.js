const QueueModel = require("../models/queueModel");

exports.addMessage = (req, res) => {
    const { queue_name } = req.params;
    const message = req.body;
    QueueModel.addMessage(queue_name, message);
    res.status(201).send({ success: true });
};

exports.getNextMessage = (req, res) => {
    const { queue_name } = req.params;
    const timeout = req.query.timeout ? parseInt(req.query.timeout) : 10000;

    const message = QueueModel.getNextMessage(queue_name);

    if (message) {
        return res.status(200).send(message);
    }

    setTimeout(() => {
        const delayedMessage = QueueModel.getNextMessage(queue_name);
        if (delayedMessage) {
            return res.status(200).send(delayedMessage);
        } else {
            return res.status(204).send();
        }
    }, timeout);
};

exports.getQueues = (req, res) => {
    const queues = QueueModel.getQueueNames();
    res.status(200).send(queues);
};
