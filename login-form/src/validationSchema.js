const validationSchema = {
    firstName: {
        required: true,
        pattern: /^[a-zA-Z]{2,}$/,
    },
    lastName: {
        required: true,
        pattern: /^[a-zA-Z]{2,}$/,
    },
    email: {
        required: true,
        pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
    },
    password: {
        required: true,
        pattern: /^(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9]{6,10}$/,
    },
};

export default validationSchema;
