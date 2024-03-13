const isProduction = process.env.NODE_ENV === 'production';
const prefix = 'Invariant failed';
function invariant(condition: any, message: any) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    throw new Error(prefix + ": " + (message || ''));
}

export default invariant;
