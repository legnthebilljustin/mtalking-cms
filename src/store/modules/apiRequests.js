import axios from "axios"
import { bus } from "@/main"
import { API_ROUTES, API_AUTH_TOKEN, API_MESSAGES } from "@/constants"

const apiRequests = {
    namespaced: true,
    state: {
        pending: "Preparing your data...",
        creation: "Creating your data...",
        deletion: "Deleting your data...",
        error: "Unable to process your request. Please try again."
    },
    actions: {
        async request (url, method, data, headers = {}) {
            try {
                const response = await axios({ method, url, data, headers })

                bus.$emit("toggleAction", {
                    show: false,
                    status: "success",
                    message: `${method.toUpperCase()} request has been successful.`
                })

                return [response.data, false]
            }
            catch (error) {
                bus.$emit("toggleAction", {
                    show: true,
                    status: "error",
                    message: API_MESSAGES.ERROR
                })

                return [null, error]
            }
        },

        async get ({ state }, payload) {
            const headers = {}
            if (payload.route === API_ROUTES.PREVIEW) {
                headers.Authorization = API_AUTH_TOKEN
            }

            bus.$emit("toggleAction", {
                show: true,
                status: "pending",
                message: API_MESSAGES.PENDING
            })

            return this.request(payload.url, "get", null, headers)
        },

        async post ({ state }, payload) {
            bus.$emit("toggleAction", {
                show: true,
                status: "pending",
                message: API_MESSAGES.CREATION
            })

            return this.request(payload.url, "post", payload.formData, payload.headers)
        },

        async patch ({ state }, payload) {
            bus.$emit("toggleAction", {
                show: true,
                status: "pending",
                message: "Updating your data..."
            })

            return this.request(payload.url, "patch", payload.formData)
        },

        async show ({ state }, payload) {
            bus.$emit("toggleAction", {
                show: true,
                status: "pending",
                message: API_MESSAGES.PENDING
            })

            return this.request(payload.url, "get")
        },

        async delete ({ state }, payload) {
            bus.$emit("toggleAction", {
                show: true,
                status: "pending",
                message: API_MESSAGES.DELETION
            })

            return this.request(payload.url, "delete")
        }
    }
}

export default apiRequests
