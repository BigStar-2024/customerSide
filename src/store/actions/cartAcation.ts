

export const addItem = (data: string) => (dispatch: any) => {
    dispatch({
        type: 'ADD_ITEM',
        payload: data
    })
}

