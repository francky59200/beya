const MOCK_DATA = {
    count: 3,
    data: [
        {
            id: 'ITEM1',
            name: 'Item 1',
            details: {
                'field1': 'value1',
                'field2': true,
                'field3': ['value31', 'value32']
            }
        },
        {
            id: 'ITEM2',
            name: 'Item 2',
            details: {
                'field1': 'value21',
                'field2': false,
                'field3': ['value231']
            }
        },
        {
            id: 'ITEM3',
            name: 'Item 3',
            details: {
                'field1': 'value31',
                'field2': false,
                'field3': []
            }
        }
    ]
}

class NotFoundError extends Error {

    constructor(id) {
        super(`item ${id} not found`)
        this.name = 'NotFoundError'
    }
}

export function listItems() {
    return Promise.resolve(MOCK_DATA)
}

export function getItem(itemId) {
    let item = MOCK_DATA.data.find(d => { return d.id === itemId })
    if (item) {
        return Promise.resolve(item)
    }
    return Promise.reject(new NotFoundError(itemId))
}
