import { alertConstants } from '../_constants';

export const alertActions = {
    success,
    error
};

function success(message) {
    return { type: alertConstants.SUCCESS, message };
}

function error(message) {
    return { type: alertConstants.ERROR, message };
}

