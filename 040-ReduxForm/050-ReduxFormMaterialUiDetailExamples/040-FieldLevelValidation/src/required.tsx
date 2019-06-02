
export default (value: any) => (value || typeof value === 'number' ? undefined : 'Required');