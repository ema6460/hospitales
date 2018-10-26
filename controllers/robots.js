const Robot = require('../models/robots');


module.exports = {

    index(req, res) {
        Robot.find({}, (err, robots) => {
            return res.status(200).send({
                data: robots
            });
        });
    },
    store(req, res) {

        const robot = new Robot(req.body);
       
        robot.save((err, robot) => {
            if (err) {
                res.status(400).send(err)
            }
            res.status(201).send({
                data: robot
            })
        });



    },
    update(req, res) {

    },
    destroy(req, res) {
        const robotId = req.params.id;
        Robot.findByIdAndRemove(robotId, (err, robot) => {
            if (err) {
                return res.status(400).send(err);
            }
            return res.status(204).send();
        });
    }

}