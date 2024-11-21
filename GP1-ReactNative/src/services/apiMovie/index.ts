import axios from 'axios'

const apiMovie = axios.create({
	baseURL: 'https://www.dnd5eapi.co/api/'
});