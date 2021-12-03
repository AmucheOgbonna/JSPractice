let { people } = require('../data');

const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people })
}

const postPerson = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: 'Please Provide your Crendentials' })
    } else {
        res.status(201).send({ success: true, person: name })
    }
    res.send('POST')
}

const postPersonPostman = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: 'Please Provide your Crendentials' })
    } else {
        res.status(201).send({ success: true, data: [...people, name] })
    }
    res.send('POST')
}

const updatePerson = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    // console.log(id, name);
    // res.send('HelloWorld')
    const person = people.find((person) => person.id === Number(id))
    if (!person) {
        return res.status(404).json({
            success: false,
            msg: `No person with id ${id}. `
        })
    }
    const newPerson = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name;
        }
        return person;
    })
    return res.status(200).json({
        success: true,
        data: newPerson
    })

}

const deletePerson = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
        return res.status(404).json({
            success: false,
            msg: `No person with id ${id}. `
        })
    }

    const newPeople = people.filter((person) => person.id !== Number(req.params.id));

    return res.status(200).json({
        success: true,
        data: newPeople
    })
}

module.exports = {
    getPeople, postPerson, postPersonPostman, updatePerson, deletePerson
}