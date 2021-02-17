import React from 'react';
import Button from '@material-ui/core/Button';

export const ButtonComponent = React.memo((props: any) => {
    return <Button
        onClick={props.onClickHandler}
        type={props.type}
        variant='contained'
        color='primary'>
        {props.title}
    </Button>
})