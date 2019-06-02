
export default (values: any) => {
    const errors: any = {};
    if (!values.requiredTextField1){
        errors.requiredTextField1 = 'Required'
    }
    return errors;
};