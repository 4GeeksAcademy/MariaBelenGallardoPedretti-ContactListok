const getState = ({ getStore, getActions, setStore }) => {
	const slug = 'belengallardo';

	return {
		store: {
			contacts: [],
			inputs: {},
			images: [
				"data:image/png;base64,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",
			],
		},
		actions: {
			getInput: (event) => {
				const name = event.target.id;
				const value = event.target.value;
				setStore({...getStore,
						  inputs: {...getStore().inputs, [name]: value}})
			},
			
			getImage: (id) => (
				id % 1 === 0
				? getStore().images[0]
				: 0
			),


			resetInput: () => {
				setStore({...getStore,inputs: {}})
			},

			createList: () => {

				fetch(`https://playground.4geeks.com/contact/agendas/${slug}`, {
					method: 'POST',
					headers: {
					"accept": "application/json"
					}
				}).then(response => {
					console.log(response);
					if(response.ok) return;
					throw Error(response.status)
				}).catch(err => {
					console.log(err);
				})
			},

			getContactList: () => {
				fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts`, {
					method: 'GET',
					headers: {
						"accept": "application/json",
					}
				}).then(response => {
					console.log(response);
					if(response.status === 404) getActions().createList();
					if(response.ok) return response.json();
					throw Error(response.status)
				}).then((object) => {
					setStore({...getStore, contacts: object.contacts})
				}).catch(err => {
					console.log(err);
				})
			},

			addContact: (event) => {
				event.preventDefault();

				const input = getStore().inputs;
				const newContact = {
					"name": input.name,
					"address": input.address,
					"phone": input.phone,
					"email": input.email,
				};

				fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts/`, {
					method: 'POST',
					body: JSON.stringify(newContact),
					headers: {
					"Content-Type": "application/json",
					"accept": "application/json",
					}
				}).then(response => {
					console.log(response);
					if(response.status === 201) return;
					throw Error(response.status)
				}).then(() => {
					getActions().getContactList()
					getActions().resetInput()
				}).catch(err => {
					console.log(err);
				})
			},

			editContact: (event, id) => {
				event.preventDefault();

				const input = getStore().inputs;
				const updateContact = {
					"name": input.name,
					"address": input.address,
					"phone": input.phone,
					"email": input.email,
				};

				fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts/${id}`, {
					method: 'PUT',
					body: JSON.stringify(updateContact),
					headers: {
					"Content-Type": "application/json",
					"accept": "application/json",
					}
				}).then(response => {
					console.log(response);
					if(response.ok) return;
					throw Error(response.status)
				}).then(() => {
					getActions().getContactList();
					getActions().resetInput();
					return redirect("/");
				}).catch(err => {
					console.log(err);
				})
			},

			deleteContact: (id) => {
				fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts/${id}`, {
					method: 'DELETE',
					headers: {
						"accept": "application/json"
					}
				}).then(response => {
					if(response.status === 204) return;
					throw Error(response.status)
				}).then(() => {
					getActions().getContactList()
				}).catch(err => {
					console.log('Error', err);
				})
			},

		}
	};
};

export default getState;
