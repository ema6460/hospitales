module.exports = {

    index(req, res) {
        return res.status(200).send({

            data: [

                {
                    name: "Robot simple",
                    description: "Simple robot"
                },

                {
                    name: "Humanoid simple",
                    description: "Simple Humanoid"
                }
            ]

        });
    },
    store(req, res) {
        return res.status(201).send(req.body);
    }

}

