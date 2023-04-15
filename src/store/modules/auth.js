import axios from "axios"
import { bus } from "@/main"

const state = {
    user: null,
    userTypeFromToken: null,
    pageType: null
}

const getters = {
    isLogged: state => {
        return state.user !== null
    },
    pageType: state => {
        return state.pageType
    },
    userTypeFromToken: state => {
        return state.userTypeFromToken
    }
}

const mutations = {
    setUser (state, user) {
        state.user = user
        localStorage.setItem(process.env.VUE_APP_STORAGE_ITEM_NAME, JSON.stringify(user))
        axios.defaults.headers.common.Authorization = `Bearer ${user.token}`
    },
    clearUser (state) {
        state.user = null
        localStorage.removeItem(process.env.VUE_APP_STORAGE_ITEM_NAME)
        axios.defaults.headers.common.Authorization = null
    },
    setDeclaredState (state, { key, value }) {
        state[key] = value
    }
}

const actions = {
    login ({ commit }, credentials) {
        return axios.post(process.env.VUE_APP_LOGIN_URL, credentials)
            .then(({ data }) => {
                commit("setUser", data)
            })
            .catch(() => {
                bus.$emit("toggleAction", {
                    show: true,
                    status: "error",
                    message: "Login failed. Invalid credentials."
                })
            })
    },
    logout ({ commit }) {
        return axios
            .delete("logout")
            .then(() => {
                commit("clearUser")
            })
    },
    setUserTypeFromToken ({ commit }, payload) {
        commit("setDeclaredState", { key: "userTypeFromToken", value: payload })
    },
    setPageType ({ commit }, payload) {
        commit("setDeclaredState", { key: "pageType", value: payload })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
