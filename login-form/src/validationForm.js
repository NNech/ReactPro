const validateForm = (values, schema) => {
    const errors = {};

    Object.keys(values).forEach((name) => {
        const fieldSchema = schema[name];
        const { required, pattern } = fieldSchema;

        let error = "";

        if (required && !values[name]) {
            error = `${name} is required`;
        } else if (values[name] && pattern && !pattern.test(values[name])) {
            error = `Invalid ${name}`;
        }

        errors[name] = error;
    });

    return errors;
};

export default validateForm;
