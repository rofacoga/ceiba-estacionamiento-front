import { Component } from 'react';

class Connection extends Component {

    /**
     * constructor para el manejo de peticiones tipo pos con parametros
     * 
     * @param {*} dependency 
     * @param {*} method 
     * @param {*} parameters 
     */
    constructor(dependency, method, parameters) {
        super();
        this.urlConnect = 'http://localhost:8080';
        this.res = null;
        (parameters === undefined || parameters == null) ? this.responseGet(dependency, method) : this.responsePost(dependency, method, parameters);
    }

    responsePost = (dependency, method, parameters) => {
        let urlT = this.urlConnect.trim();
        let dependencyT = dependency.trim();
        let methodT = method.trim();
        let url = urlT + '/' + dependencyT + '/' + methodT;

        try {
            return fetch(url, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(parameters)
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                })
                .then((recurso) => function name() {
                    console.log(recurso);
                })
                .catch(error => {
                    console.log(error);
                });

        } catch (error) {
            console.log(error);
        }
        return this.res;
    }

    responseGet = (dependency, method) => {
        let urlT = this.urlConnect.trim();
        let dependencyT = dependency.trim();
        let methodT = method.trim();
        let url = urlT + '/' + dependencyT + '/' + methodT;

        return fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((recurso) => {
                console.log(recurso);
            })
            .catch(error => {
                console.log(error);
            });
    }
}

export default Connection;