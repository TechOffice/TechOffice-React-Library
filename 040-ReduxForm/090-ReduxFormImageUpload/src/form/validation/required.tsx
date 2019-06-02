
/**
 * Required Validate Rule for Redux Form 
 * 
 */
export default (value: any) => {
    return value || typeof value === 'number' ? undefined : 'Required'
};