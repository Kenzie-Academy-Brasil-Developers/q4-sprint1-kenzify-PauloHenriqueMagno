import * as yup from 'yup';

const mapRules = (receivedObject: object, shapeRules: yup.AnySchema) =>
  Object.keys(receivedObject).reduce((newObject, key) => {
    return { ...newObject, [key]: shapeRules };
  }, {});

const createPlaylistShape = yup.lazy((receivedObject) =>
  yup.object( mapRules( receivedObject,
    yup.array().of( yup.object().shape({
      title: yup.string().required().transform(
        (value, originalValue: string) => originalValue.split(' ').map( word => word[0].toUpperCase() + word.substring(1).toLowerCase()).join(' ')
      ),
      duration: yup.string().required(),
      releasedDate: yup.date().required(),
      listenedByMe: yup.number().default(0),
      genres: yup.array().of(yup.string()).default([]).optional()
    }))
  ))
  .required()
);

export { createPlaylistShape };