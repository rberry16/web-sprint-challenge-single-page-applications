import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .min(2, 'name must be at least 2 characters')
    .required(),

    size: yup
    .string()
    .trim()
    .required(),

    special: yup
    .string()
    .trim(),

    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    peppers: yup.boolean(),
    onions: yup.boolean()
})

export default formSchema;