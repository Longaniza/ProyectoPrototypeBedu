
export const bigStopWatchState = { seconds: 10, showCountdown: true, showMessage: true, percentageCountDown: 0 }
export function stopWatchReducer(state, action) {
    switch (action.type) {
        case 'addSeconds':
            return { ...state, seconds: state.seconds + 1 };
        case 'minusSeconds':
            return { ...state, seconds: state.seconds - 1 };
        case 'changeshowCountdown':
            return { ...state, showCountdown: action.payload.showCountdown };
        case 'changeShowMessage':
            return { ...state, showMessage: action.payload.showMessage };
        case 'addPercentageCountDown':
            return { ...state, percentageCountDown: state.percentageCountDown + 10 };
        default:
            throw new Error();
    }
}