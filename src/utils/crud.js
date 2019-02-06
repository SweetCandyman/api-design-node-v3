export const getOne = model => async (req, res) => {
  const id = req.params.id
  const userId = req.user._id
  const document = await model.findOne({ _id: id, createdBy: userId }).exec()

  if (!document) {
    return res.status(404).end()
  }
  res.status(200).json({ data: document })
}

export const getMany = model => async (req, res) => {
  const documents = await model.find({ createdBy: req.user._id }).exec()
  res.status(200).json({ data: documents })
}

export const createOne = model => async (req, res) => {
  const document = await model.create({ ...req.body, createdBy: req.user._id })
  res.status(201).json({ data: document })
}

export const updateOne = model => async (req, res) => {
  const document = await model.findOneAndUpdate(
    {
      _id: req.params.id,
      createdBy: req.user.id
    },
    req.body,
    { new: true }
  )

  if (!document) {
    return res.status(400).json({ data: document })
  }
  res.status(200).json({ data: document })
}

export const removeOne = model => async (req, res) => {
  const document = await model.findOneAndRemove({
      _id: req.params.id,
      createdBy: req.user._id
    })
    .exec()

  if (!document) {
    return res.status(400).end()
  }
  res.status(200).json({ data: document })
}

export const crudControllers = model => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model)
})
