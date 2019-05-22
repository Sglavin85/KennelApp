import constants from "./APIManager"

export default {
    get(id) {
        return fetch(`${constants.remoteURL}/animals/${id}`)
            .then(response => response.json())
    },
    getAll() {
        return fetch(`${constants.remoteURL}/animals?_embed=ownerAnimal`)
            .then(response => response.json())
    },
    removeAndList(id) {
        return fetch(`${constants.remoteURL}/animals/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(response => response.json())
            .then(this.getAll)
    },
    editAndList(obj, id) {
        return fetch(`${constants.remoteURL}/animals/${id}`, {
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
        return fetch(`${constants.remoteURL}/animals`, {
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
