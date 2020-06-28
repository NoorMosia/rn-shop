export const SEARCH = 'SEARCH';

export const search = item => {
    return {
        type: SEARCH,
        item: item
    }
}