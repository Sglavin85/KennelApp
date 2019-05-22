import constants from "./APIManager"

export default {
    get(id) {
        return fetch(`${constants.remoteURL}/owners/${id}`)
            .then(response => response.json())
    },
    getAll() {
        return fetch(`${constants.remoteURL}/owners`)
            .then(response => response.json())
    },
    removeAndList(id) {
        return fetch(`${constants.remoteURL}/owners/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(response => response.json())
            .then(this.getAll)
    },
    editAndList(obj, id) {
        return fetch(`${constants.remoteURL}/owners/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
            .then(this.getAll)
    },
    addAndList(obj) {
        return fetch(`${constants.remoteURL}/owners`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
            .then(this.getAll)
    }
}
