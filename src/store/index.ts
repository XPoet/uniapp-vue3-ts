import {createStore} from 'vuex'

const defaultState = {
    count: 0,
    selectedTag: '',
    selectedQuestion: {} as any,
}

// Create a new store instance.
export default createStore({
    state() {
        return defaultState
    },
    mutations: {
        setSelectedTag(state: typeof defaultState, payload) {
            state.selectedTag = payload
        },

        setSelectedQuestion(state: typeof defaultState, payload) {
            for (const payloadKey in payload) {
                state.selectedQuestion[payloadKey] = payload[payloadKey]
            }
        },

    },
    actions: {},

    getters: {
        tag(state: typeof defaultState) {
            return state.selectedTag
        },

        targetQuestion(state: typeof defaultState) {
            return state.selectedQuestion
        }
    }
})